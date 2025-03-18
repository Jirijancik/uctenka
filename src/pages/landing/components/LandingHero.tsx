import { Link } from "react-router";

export const LandingHero = () => {
    return (
        <main className="relative">
            <div className="absolute inset-0 -top-2 h-[1600px] bg-[url(/images/landing/hero-bg-gradient.png)] [background-size:200%_60%] bg-no-repeat opacity-20 [background-position-x:center] sm:[background-size:100%_100%] dark:opacity-15" />

            <div className="relative z-10 container py-28 xl:py-40">
                <div className="flex flex-col items-center">
                    <Link className="badge badge-secondary rounded-full" to="/apps/gen-ai/home" target="_blank">
                        <span className="iconify lucide--bot size-4" />
                        New: Gen AI App
                    </Link>
                    <div className="mt-4 max-w-[700px] transition-all duration-1000 starting:scale-125 starting:opacity-0 starting:blur-sm">
                        <p className="text-center text-xl leading-tight font-bold md:text-5xl">
                            Boost Your Workflow, <br />
                            <span className="landing-gradient-underline">Redefine</span> Success with{" "}
                            <span className="animated-text from-primary bg-linear-to-r via-blue-500 to-purple-500">
                                Nexus
                            </span>
                        </p>
                    </div>
                    <div className="mt-6 max-w-[500px] transition-all duration-1000 xl:mt-8 starting:opacity-0 starting:blur-sm">
                        <p className="text-center sm:text-lg">
                            Start your next project with Nexus, designed for effortless customization to streamline your
                            development process.
                        </p>
                    </div>

                    <div className="mt-8 inline-flex items-center gap-3 transition-all duration-1000 sm:gap-5 xl:mt-12 starting:opacity-0 starting:blur-sm">
                        <Link to="/dashboards/ecommerce" className="btn btn-primary max-sm:btn-sm gap-3 text-base">
                            <span className="iconify lucide--zap size-4 sm:size-5" />
                            Live Preview
                        </Link>
                        <Link
                            to="/ui/components/accordion"
                            className="btn btn-outline btn-neutral max-sm:btn-sm gap-3 text-base dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
                            <span className="iconify lucide--box size-4 sm:size-5" />
                            Components
                        </Link>
                    </div>
                    <div
                        id="landing-hero"
                        className="border-base-100/15 bg-base-100/25 dark:border-px mt-8 w-fit rounded-lg border-2 p-3 transition-all duration-1000 md:mt-16 dark:border-white/2 dark:bg-white/4 starting:scale-125">
                        <img
                            src="/images/landing/hero-dashboard-light.jpg"
                            className="inline w-[1000px] rounded-lg dark:hidden"
                            alt="hero-landing"
                        />
                        <img
                            src="/images/landing/hero-dashboard-dark.jpg"
                            className="hidden w-[1000px] rounded-lg dark:inline"
                            alt="hero-landing"
                        />
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-base-content/60 font-medium">Available In</p>
                        <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
                            <div className="tooltip" data-tip="Tailwind CSS 4">
                                <img
                                    src="/images/landing/logo-tailwind.svg"
                                    className="size-7 sm:size-9"
                                    alt="Tailwind CSS"
                                />
                            </div>
                            <div className="tooltip" data-tip="daisyUI 5 - Component Library">
                                <img
                                    src="/images/landing/logo-daisyui.svg"
                                    className="size-7 sm:size-9"
                                    alt="DaisyUI"
                                />
                            </div>
                            <div className="tooltip" data-tip="Javascript">
                                <img src="/images/landing/logo-js.svg" className="size-7 sm:size-9" alt="Javascript" />
                            </div>

                            <div className="tooltip" data-tip="Typescript 5">
                                <img src="/images/landing/logo-ts.svg" className="size-7 sm:size-9" alt="Typescript" />
                            </div>
                            <div className="tooltip" data-tip="Vite">
                                <img src="/images/landing/logo-vite.svg" className="size-7 sm:size-9" alt="Vite" />
                            </div>

                            <div className="tooltip" data-tip="React 19">
                                <img src="/images/landing/logo-react.svg" className="size-7 sm:size-9" alt="React" />
                            </div>

                            <div className="tooltip" data-tip="Next.JS 15">
                                <img
                                    src="/images/landing/logo-next.svg"
                                    className="size-7 sm:size-9 dark:invert"
                                    alt="Next.JS"
                                />
                            </div>
                            <div className="tooltip" data-tip="SvelteKit 2">
                                <img
                                    src="/images/landing/logo-svelte.svg"
                                    className="size-7 sm:size-9"
                                    alt="SvelteKit 2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animate-bounce-slow absolute start-16 top-60 opacity-80 max-xl:hidden dark:opacity-60">
                    <img src="/images/landing/hero-widget-1.png" className="h-30" alt="Hero 1" />
                </div>
                <div className="animate-bounce-slow absolute end-0 top-160 opacity-80 max-xl:hidden dark:opacity-60">
                    <img src="/images/landing/hero-widget-2.png" className="h-30" alt="Hero 2" />
                </div>
            </div>
        </main>
    );
};
