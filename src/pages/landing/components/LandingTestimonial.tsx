import { useState } from "react";

const testimonials = [
    {
        id: "landing-testimonial-1",
        image: "/images/landing/testimonial-avatar-1.jpg",
        name: "Pouya Saadeghi",
        role: "Creator of daisyUI",
        comment:
            "This is the ultimate admin dashboard template, with all the essential blocks and features you need. Save you months of development time and helps you launch your app faster",
    },
    {
        id: "landing-testimonial-2",
        image: "/images/landing/testimonial-avatar-2.jpg",
        name: "Alexandre Cohen",
        role: "Co-owner / CTO of Disphere",
        comment:
            "Exceptional dashboard with a sleek design and seamless integration of DaisyUI components. Perfect for my existing project !",
    },
    {
        id: "landing-testimonial-3",
        image: "/images/landing/testimonial-avatar-3.png",
        name: "Quinn the explorer",
        role: "Solo Web Developer",
        comment:
            "Beautifully designed dashboard! It provided me with an exceptional starting point and instantly boosted my confidence to successfully complete the project",
    },
] as const;

export const LandingTestimonial = () => {
    const [currentPosition, setCurrentPosition] = useState(0);

    const next = () => {
        changePosition(currentPosition < testimonials.length - 1 ? currentPosition + 1 : 0);
    };

    const prev = () => {
        changePosition(currentPosition == 0 ? testimonials.length - 1 : currentPosition - 1);
    };

    const changePosition = (position: number) => {
        setCurrentPosition(position);
        document.getElementById(testimonials[position].id)?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
        });
    };

    return (
        <section id="testimonial" className="relative container py-8 md:py-12 xl:py-16 2xl:py-24">
            <div className="absolute inset-0 bg-[url('/images/landing/testimonial-background.svg')] bg-cover bg-center bg-no-repeat opacity-8 dark:opacity-6"></div>

            <div className="relative">
                <div className="text-center">
                    <div className="inline-flex items-center rounded border border-orange-500/10 bg-orange-500/5 p-2">
                        <span className="iconify lucide--sparkles size-5 text-orange-600" />
                    </div>
                    <h2 className="mt-4 text-3xl font-semibold">Voices That Matter</h2>
                    <p className="text-base-content/70 mt-3 inline-block max-w-lg">
                        Read honest testimonials from those who have experienced the value we bring to the table
                    </p>
                </div>

                <div className="relative mt-24 w-full">
                    <div className="carousel w-full">
                        {testimonials.map((testimonial) => (
                            <div
                                id={testimonial.id}
                                key={testimonial.id}
                                className="carousel-item flex w-full flex-col items-center justify-center">
                                <div className="text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle bg-base-200 w-24">
                                            <img src={testimonial.image} alt="testimonial" />
                                        </div>
                                    </div>
                                    <p className="mt-6 text-xl font-medium">{testimonial.name}</p>
                                    <p className="text-base-content/80 text-sm">{testimonial.role}</p>
                                    <div className="mt-6 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            className="size-6 text-yellow-500"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            className="size-6 text-yellow-500"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            className="size-6 text-yellow-500"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            className="size-6 text-yellow-500"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            className="size-6 text-yellow-500"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path>
                                        </svg>
                                    </div>
                                    <p className="mt-6 inline-block max-w-[600px]">{testimonial.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
                        <button onClick={prev} className="btn btn-circle" aria-label="prev">
                            <span className="iconify lucide--chevron-left size-4" />
                        </button>
                        <button onClick={next} className="btn btn-circle" aria-label="next">
                            <span className="iconify lucide--chevron-right size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
