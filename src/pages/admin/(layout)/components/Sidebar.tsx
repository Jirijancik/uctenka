import { useEffect, useMemo, useRef } from "react";
import { Link, useLocation } from "react-router";
import SimpleBarCore from "simplebar-core";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { Logo } from "@/components/Logo";
import { useConfig } from "@/contexts/config";

import { getActivatedItemParentKeys } from "../helpers";
import { ISidebarMenuItem, SidebarMenuItem } from "./SidebarMenuItem";

export const Sidebar = ({ menuItems }: { menuItems: ISidebarMenuItem[] }) => {
    const { pathname } = useLocation();
    const { config } = useConfig();
    const scrollRef = useRef<SimpleBarCore | null>(null);
    const hasMounted = useRef(false);

    const activatedParents = useMemo(
        () => new Set(getActivatedItemParentKeys(menuItems, pathname)),
        [menuItems, pathname],
    );

    useEffect(() => {
        setTimeout(() => {
            const contentElement = scrollRef.current?.getContentElement();
            const scrollElement = scrollRef.current?.getScrollElement();
            if (contentElement) {
                const activatedItem = contentElement.querySelector<HTMLElement>(".active");
                const top = activatedItem?.getBoundingClientRect().top;
                if (activatedItem && scrollElement && top && top !== 0) {
                    scrollElement.scrollTo({ top: scrollElement.scrollTop + top - 300, behavior: "smooth" });
                }
            }
        }, 100);
    }, [activatedParents, scrollRef]);

    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            return;
        }
        if (window.innerWidth <= 64 * 16) {
            const sidebarTrigger = document.querySelector<HTMLInputElement>("#layout-sidebar-toggle-trigger");
            if (sidebarTrigger) {
                sidebarTrigger.checked = false;
            }
        }
    }, [pathname]);

    return (
        <>
            <input
                type="checkbox"
                id="layout-sidebar-toggle-trigger"
                className="hidden"
                aria-label="Toggle layout sidebar"
            />

            <div
                id="layout-sidebar"
                data-theme={
                    config.sidebarTheme == "dark" && ["light", "contrast"].includes(config.theme) ? "dark" : undefined
                }>
                <Link to="/dashboards/ecommerce" className="flex min-h-16 items-center justify-center">
                    <Logo />
                </Link>
                <div className="relative min-h-0 grow">
                    <SimpleBar ref={scrollRef} className="size-full">
                        <div id="sidebar-menu">
                            {menuItems.map((item, index) => (
                                <SidebarMenuItem {...item} key={index} activated={activatedParents} />
                            ))}
                        </div>
                    </SimpleBar>
                    <div className="from-base-100/60 pointer-events-none absolute start-0 end-0 bottom-0 h-7 bg-linear-to-t to-transparent"></div>
                </div>

                <div className="mb-2">
                    <hr className="border-base-300" />
                    <ul className="menu w-full">
                        <li>
                            <Link to="/pages/settings" className="flex items-center gap-2">
                                <span className="iconify lucide--settings-2 size-4" />
                                Settings
                                <div className="border-primary/20 bg-primary/5 text-primary rounded-box ms-auto border px-1 text-[11px]">
                                    New
                                </div>
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/pages/get-help" className="flex items-center gap-2">
                                <span className="iconify lucide--circle-help size-4" />
                                Get Help
                                <div className="border-primary/20 bg-primary/5 text-primary rounded-box ms-auto border px-1 text-[11px]">
                                    New
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown dropdown-top dropdown-end w-full">
                        <div
                            tabIndex={0}
                            role="button"
                            className="bg-base-200 hover:bg-base-300 rounded-box mx-2 mt-0 flex cursor-pointer items-center gap-2.5 px-3 py-2 transition-all">
                            <div className="avatar">
                                <div className="bg-base-200 mask mask-squircle w-8">
                                    <img src="/images/avatars/1.png" alt="Avatar" />
                                </div>
                            </div>
                            <div className="grow -space-y-0.5">
                                <p className="text-sm font-medium">Denish N</p>
                                <p className="text-base-content/60 text-xs">@withden</p>
                            </div>
                            <span className="iconify lucide--chevrons-up-down text-base-content/60 size-4" />
                        </div>
                        <ul
                            role="menu"
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box shadow-base-content/4 mb-1 w-48 p-1 shadow-[0px_-10px_40px_0px]">
                            <li>
                                <Link to="/pages/settings">
                                    <span className="iconify lucide--user size-4" />
                                    <span>My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/pages/settings">
                                    <span className="iconify lucide--settings size-4" />
                                    <span>Settings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/pages/get-help">
                                    <span className="iconify lucide--help-circle size-4" />
                                    <span>Help</span>
                                </Link>
                            </li>
                            <li>
                                <div>
                                    <span className="iconify lucide--bell size-4" />
                                    <span>Notification</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className="iconify lucide--arrow-left-right size-4" />
                                    <span>Switch Account</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <label htmlFor="layout-sidebar-toggle-trigger" id="layout-sidebar-backdrop"></label>
        </>
    );
};
