import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from './invoice.entity';
import {
  CreateInvoiceDTO,
  PatchInvoiceDTO,
  UpdateInvoiceDTO,
} from './invoice.dto';
import * as Handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';
import puppeteer from 'puppeteer';

// Define the helper
const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

// Register the helper
Handlebars.registerHelper('formatDate', formatDate);

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {}

  async create(
    createInvoiceDto: CreateInvoiceDTO,
    userId: number,
  ): Promise<Invoice> {
    const invoiceWithOwner: CreateInvoiceDTO = {
      ...createInvoiceDto,
      ownerId: userId,
    };
    const invoice = this.invoiceRepository.create(invoiceWithOwner);
    return this.invoiceRepository.save(invoice);
  }

  async findAll(userId): Promise<Invoice[]> {
    return this.invoiceRepository.find({ where: { owner: { id: userId } } });
  }

  async findOne(id: number): Promise<Invoice> {
    return this.invoiceRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateInvoiceDto: UpdateInvoiceDTO,
  ): Promise<Invoice> {
    await this.invoiceRepository.update(id, updateInvoiceDto);
    return this.invoiceRepository.findOneBy({ id });
  }

  async patch(id: number, patchInvoiceDto: PatchInvoiceDTO): Promise<Invoice> {
    await this.invoiceRepository.update(id, patchInvoiceDto);
    return this.invoiceRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.invoiceRepository.delete(id);
  }

  private compilePdfTemplate(data: Invoice): string {
    const filePath = path.join(
      __dirname,
      '..',
      'templates',
      'invoice',
      'pdf.hbs',
    );

    const html = fs.readFileSync(filePath, 'utf-8');
    const template = Handlebars.compile(html);
    return template(data);
  }

  async generatePdf(invoiceData: Invoice): Promise<Buffer> {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    const html = this.compilePdfTemplate(invoiceData);
    await page.setContent(html);

    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();

    return pdfBuffer;
  }
}
