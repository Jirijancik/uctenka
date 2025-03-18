"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Logo } from "@/components/Logo";
import { ThemeToggleDropdown } from "@/components/ThemeToggleDropdown";

export const LandingTopbar = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [scrolling, setScrolling] = useState<"up" | "down" | undefined>(undefined);

    const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0);

    const handleScroll = useCallback(() => {
        setTimeout(() => {
            setPrevScrollPosition(scrollPosition);
            setScrollPosition(window.scrollY);
        }, 200);
    }, [scrollPosition]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        if (scrollPosition < 500) {
            setScrolling(undefined);
        } else {
            if (scrollPosition - prevScrollPosition > 0) {
                setScrolling("down");
            } else if (scrollPosition - prevScrollPosition < 0) {
                setScrolling("up");
            }
        }
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll, scrollPosition]);

    return (
        <>
            <div
                data-scrolling={scrolling}
                data-at-top={scrollPosition < 30}
                className="group fixed inset-x-0 z-[60] flex justify-center transition-[top] duration-500 data-[scrolling=down]:-top-full sm:container [&:not([data-scrolling=down])]:top-4">
                <div className="group-data-[at-top=false]:bg-base-100 group-data-[at-top=false]:dark:bg-base-200 flex w-full items-center justify-between rounded-full px-6 py-3 transition-all duration-500 group-data-[at-top=false]:w-[800px] group-data-[at-top=false]:shadow group-data-[at-top=false]:max-sm:mx-2 lg:py-1.5">
                    <div className="flex items-center gap-2">
                        <div className="flex-none lg:hidden">
                            <div className="drawer">
                                <input id="demo-drawer" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    <label
                                        htmlFor="demo-drawer"
                                        className="btn drawer-button btn-ghost btn-square btn-sm">
                                        <span className="iconify lucide--menu size-4.5" />
                                    </label>
                                </div>
                                <div className="drawer-side z-[50]">
                                    <label
                                        htmlFor="demo-drawer"
                                        aria-label="close sidebar"
                                        className="drawer-overlay"></label>
                                    <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
                                        <li>
                                            <p>Home</p>
                                        </li>
                                        <li>
                                            <Link href="/dashboards/ecommerce">Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link href="/ui/components/accordion">Components</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <Link href="/dashboards/ecommerce">
                            <Logo />
                        </Link>
                    </div>
                    <div className="gap-3">
                        <ul className="menu menu-horizontal hidden gap-2 px-1 lg:inline-flex">
                            <li>
                                <p>Home</p>
                            </li>
                            <li>
                                <Link href="/dashboards/ecommerce">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="/ui/components/accordion">Components</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="inline-flex items-center gap-2.5">
                        <ThemeToggleDropdown
                            triggerClass="btn btn-square btn-sm border-transparent bg-transparent"
                            dropdownClass="dropdown-center dropdown-end"
                        />
                        <Link
                            href="https://daisyui.com/store/"
                            target="_blank"
                            className="btn btn-primary btn-sm btn-square">
                            <span className="iconify lucide--shopping-cart size-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
