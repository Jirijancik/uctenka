import Link from "next/link";

const purchaseLink = "https://daisyui.com/store/checkout?product=cdd028c5-dd01-41fc-a036-fd73b7a24cc0&aff=K0XmL";

export const LandingPackage = () => {
    return (
        <div className="container py-8 md:py-12 xl:py-16 2xl:py-24">
            <div className="text-center">
                <div className="rounded-box inline-flex items-center border border-green-500/10 bg-green-500/5 p-2 text-green-500">
                    <span className="iconify lucide--dollar-sign size-5" />
                </div>
                <p className="mt-4 text-3xl font-semibold">Find Your Perfect Plan</p>
                <p className="text-base-content/70 mt-3 inline-block max-w-lg">
                    Explore flexible pricing options designed to deliver value, crafted to match your unique
                    requirements
                </p>
            </div>
            <div className="mt-16 grid gap-4 lg:grid-cols-3 xl:gap-6">
                <div className="border-base-300 rounded-box border">
                    <div className="bg-base-content/1 border-base-300 border-b p-6">
                        <div className="flex justify-between gap-3">
                            <div className="bg-base-content/3 border-base-300 rounded-box inline-flex items-center border p-2">
                                <span className="iconify lucide--lightbulb size-4.5" />
                            </div>
                            <p className="text-3xl font-semibold">$69</p>
                        </div>
                        <p className="mt-3 text-[22px] font-medium">Solo</p>

                        <p className="text-base-content/80 mt-1 text-sm">
                            Great for solo developers working on hobby projects or personal creations
                        </p>
                        <Link
                            className="btn btn-outline btn-block border-base-300 mt-5 gap-2.5"
                            href={purchaseLink}
                            target="_blank">
                            <span className="iconify lucide--shopping-cart size-4" />
                            Start a Solo Journey
                        </Link>
                    </div>
                    <div className="p-5">
                        <p className="text-base-content/70 text-sm">Available for</p>
                        <div className="mt-2 space-y-1">
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-check size-5 text-green-500" />
                                <p>HTML</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-x text-error size-5" />
                                <p>React</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-x text-error size-5" />
                                <p>Next.js</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-x text-error size-5" />
                                <p>SvelteKit</p>
                            </div>
                        </div>
                        <p className="text-base-content/70 mt-3 text-sm">License</p>
                        <div className="mt-2 space-y-1">
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-check size-5 text-green-500" />
                                <p>Only for 1 developer and 1 project</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-x text-error size-5" />
                                <p>Can be used for multiple projects/developers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-primary/25 rounded-box relative border">
                    <div className="bg-primary text-primary-content absolute start-1/2 -top-3 -translate-x-1/2 rounded-full px-3 py-1 text-xs">
                        Most Popular
                    </div>
                    <div className="bg-primary/4 dark:bg-primary/6 border-primary/20 border-b p-6">
                        <div className="flex justify-between gap-3">
                            <div className="bg-primary/10 text-primary border-primary/20 rounded-box inline-flex items-center border p-2">
                                <span className="iconify lucide--rocket size-4.5" />
                            </div>
                            <p className="text-3xl font-semibold">$129</p>
                        </div>
                        <p className="text-primary mt-3 text-[22px] font-medium">Team</p>
                        <p className="text-base-content/80 mt-1 text-sm">
                            Ideal for small companies for quick integration and team collaboration
                        </p>
                        <Link className="btn btn-primary btn-block mt-5 gap-2.5" href={purchaseLink} target="_blank">
                            <span className="iconify lucide--shopping-bag size-4" />
                            Ignite Team Growth
                        </Link>
                    </div>
                    <div className="p-5">
                        <p className="text-base-content/70 text-sm">Available for</p>
                        <div className="mt-2 space-y-1">
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-check size-5 text-green-500" />
                                <p>HTML</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-check size-5 text-green-500" />
                                <p>React</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-check size-5 text-green-500" />
                                <p>Next.js</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-check size-5 text-green-500" />
                                <p>SvelteKit</p>
                            </div>
                        </div>
                        <p className="text-base-content/70 mt-3 text-sm">License</p>
                        <div className="mt-2 space-y-1">
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-check size-5 text-green-500" />
                                <p>Team (multiple developers)</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-x text-error size-5" />
                                <p>Can be used in multiple projects</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-secondary/25 rounded-box border">
                    <div className="bg-secondary/4 dark:bg-secondary/6 border-secondary/20 border-b p-6">
                        <div className="flex justify-between gap-3">
                            <div className="bg-secondary/10 text-secondary border-secondary/20 rounded-box inline-flex items-center border p-2">
                                <span className="iconify lucide--briefcase size-4.5" />
                            </div>
                            <p className="text-3xl font-semibold">$499</p>
                        </div>
                        <p className="text-secondary mt-3 text-[22px] font-medium">Enterprise</p>
                        <p className="mt-1 text-sm opacity-80">
                            Perfect for large teams, offering scalability, collaboration, and multi-project support
                        </p>
                        <Link className="btn btn-secondary btn-block mt-5 gap-2.5" href={purchaseLink} target="_blank">
                            <span className="iconify lucide--building-2 size-4" />
                            Unlock Business Power
                        </Link>
                    </div>
                    <div className="p-5">
                        <p className="text-base-content/70 text-sm">Available for</p>
                        <div className="mt-2 space-y-1">
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-check size-5 text-green-500" />
                                <p>HTML</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-check size-5 text-green-500" />
                                <p>React</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-check size-5 text-green-500" />
                                <p>Next.js</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-check size-5 text-green-500" />
                                <p>SvelteKit</p>
                            </div>
                        </div>
                        <p className="text-base-content/70 mt-3 text-sm">License</p>
                        <div className="mt-2 space-y-1">
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-check size-5 text-green-500" />
                                <p>Team (multiple developers)</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--circle-check size-5 text-green-500" />
                                <p>Can be used in multiple projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p className="mt-3">
                    You can check full details:
                    <Link href="https://nexus.daisyui.com/docs/" className="text-primary ms-1" target="_blank">
                        Packages
                    </Link>
                </p>
            </div>
        </div>
    );
};
