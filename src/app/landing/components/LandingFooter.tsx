import Link from "next/link";

const purchaseLink = "https://daisyui.com/store/checkout?product=cdd028c5-dd01-41fc-a036-fd73b7a24cc0&aff=K0XmL";

export const LandingFooter = () => {
    return (
        <div className="relative">
            <div className="grainy absolute inset-0 z-0 opacity-20"></div>

            <div className="relative z-[2] container pt-8 md:pt-12 xl:pt-16 2xl:pt-24">
                <div className="relative overflow-hidden rounded-xl bg-linear-to-tr from-[#1c1b2b] to-[#26252e] text-white dark:from-[#1a1e22] dark:to-[#23292e]">
                    <div className="flex h-64 flex-col justify-center max-2xl:mx-4 max-2xl:items-center lg:h-84 2xl:ms-24 2xl:max-w-[600px]">
                        <p className="text-center text-xl font-semibold md:text-2xl lg:text-4xl">
                            Start today and launch your success right away.
                        </p>
                        <div className="mt-8 inline-flex items-center justify-center gap-3">
                            <Link href={purchaseLink} className="btn btn-primary gap-2" target="_blank">
                                <span className="iconify lucide--shopping-cart size-4" />
                                Purchase Now
                            </Link>
                            <Link href="/dashboards/ecommerce" className="btn btn-ghost gap-2">
                                <span className="iconify lucide--zap size-4" />
                                Live Preview
                            </Link>
                        </div>
                    </div>
                    <div className="absolute -end-28 -top-2 rotate-[-8deg] max-2xl:hidden">
                        <img src="/images/landing/footer-dashboard.jpg" alt="mobile-landing" className="rounded-lg" />
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-5">
                    <div className="col-span-2">
                        <p className="text-2xl font-medium">Nexus.</p>
                        <p className="text-base-content/80 mt-2">
                            Kickstart your next project with a platform built for effortless customization, streamlining
                            your development process
                        </p>
                        <div className="mt-8 flex items-center gap-2.5 xl:mt-16">
                            <Link className="btn btn-sm btn-circle" href="https://github.com/withden" target="_blank">
                                <span className="iconify lucide--github size-4" />
                            </Link>
                            <Link className="btn btn-sm btn-circle" href="https://x.com/_withden" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="size-4">
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.7"
                                        d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"
                                        color="currentColor"
                                    />
                                </svg>
                            </Link>
                            <button className="btn btn-sm btn-circle">
                                <span className="iconify lucide--link size-3.5" />
                            </button>
                        </div>
                    </div>
                    <div className="max-md:hidden xl:col-span-1"></div>
                    <div className="col-span-1">
                        <p className="font-medium">Quick Links</p>
                        <div className="text-base-content/80 *:hover:text-base-content mt-5 flex flex-col space-y-1.5 *:cursor-pointer">
                            <span>Dashboard</span>
                            <span>UI Kit</span>
                            <span>Login</span>
                            <p className="flex items-center gap-1.5">
                                Feedback <span className="badge badge-sm h-4.5 rounded-full px-1.5">New</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <p className="font-medium">Company</p>
                        <div className="text-base-content/80 *:hover:text-base-content mt-5 flex flex-col space-y-1.5 *:cursor-pointer">
                            <span>About</span>
                            <p className="flex items-center gap-1.5">
                                Career
                                <span className="badge badge-sm badge-success h-4.5 rounded-full px-1.5">Hiring</span>
                            </p>
                            <span>Blog</span>
                            <span>Contact</span>
                            <span>Support</span>
                        </div>
                    </div>
                </div>
                <div className="border-base-300 mt-12 flex justify-between border-t py-6">
                    <span>
                        Developed by
                        <Link
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://x.com/withden_"
                            className="link text-primary link-hover ms-1">
                            Denish Navadiya
                        </Link>
                    </span>
                    <span>
                        🌼 Made with
                        <Link className="link-hover link-primary ms-1" href="https://daisyui.com" target="_blank">
                            daisyUI
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};
