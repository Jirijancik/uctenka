import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  Res,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import {
  CreateInvoiceDTO,
  PatchInvoiceDTO,
  UpdateInvoiceDTO,
} from './invoice.dto';
import { Response } from 'express';
import { GetUser } from 'src/decorators/getCurrentUser';


@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDTO, @GetUser() userId: number) {
    return this.invoiceService.create(createInvoiceDto, userId);
  }

  @Get()
  findAll(@GetUser() userId: number) {
    return this.invoiceService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.invoiceService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateInvoiceDto: UpdateInvoiceDTO) {
    return this.invoiceService.update(id, updateInvoiceDto);
  }

  @Patch(':id')
  patch(@Param('id') id: number, @Body() patchInvoiceDto: PatchInvoiceDTO) {
    return this.invoiceService.patch(id, patchInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.invoiceService.remove(id);
  }

  @Get(':id/pdf')
  async getInvoicePdf(@Param('id') id: number, @Res() res: Response) {
    const invoiceData = await this.invoiceService.findOne(id);
    const pdfBuffer = await this.invoiceService.generatePdf(invoiceData);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=invoice-${id}.pdf`,
    );
    res.end(pdfBuffer);
  }
}
