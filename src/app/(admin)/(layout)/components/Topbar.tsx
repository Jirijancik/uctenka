import Link from "next/link";

import { ThemeToggleDropdown } from "@/components/ThemeToggleDropdown";

import { TopbarNotificationButton } from "./TopbarNotificationButton";
import { TopbarSearchButton } from "./TopbarSearchButton";

export const Topbar = () => {
    return (
        <div
            role="navigation"
            aria-label="Navbar"
            className="flex items-center justify-between px-3"
            id="layout-topbar">
            <div className="inline-flex items-center gap-3">
                <label
                    className="btn btn-square btn-ghost btn-sm"
                    aria-label="Leftmenu toggle"
                    htmlFor="layout-sidebar-toggle-trigger">
                    <span className="iconify lucide--menu size-5" />
                </label>
                <TopbarSearchButton />
            </div>
            <div className="inline-flex items-center gap-1.5">
                <ThemeToggleDropdown
                    triggerClass="btn btn-sm btn-circle btn-ghost"
                    dropdownClass="dropdown-center"
                    dropdownContentClass="mt-2"
                    iconClass="size-4.5"
                />
                <label htmlFor="layout-rightbar-drawer" className="btn btn-circle btn-ghost btn-sm drawer-button">
                    <span className="iconify lucide--settings-2 size-4.5" />
                </label>
                <TopbarNotificationButton />

                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn px-1.5">
                        <div className="flex items-center gap-2">
                            <div className="avatar">
                                <div className="bg-base-200 mask mask-squircle w-8">
                                    <img src="/images/avatars/1.png" alt="Avatar" />
                                </div>
                            </div>
                            <div className="-space-y-0.5 text-start">
                                <p className="text-sm">Denish</p>
                                <p className="text-base-content/60 text-xs">Profile</p>
                            </div>
                        </div>
                    </div>
                    <div tabIndex={0} className="dropdown-content bg-base-100 rounded-box mt-4 w-44 shadow">
                        <ul className="menu w-full p-2">
                            <li>
                                <Link href="/pages/settings">
                                    <span className="iconify lucide--user size-4" />
                                    <span>My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/pages/settings">
                                    <span className="iconify lucide--settings size-4" />
                                    <span>Settings</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/pages/get-help">
                                    <span className="iconify lucide--help-circle size-4" />
                                    <span>Help</span>
                                </Link>
                            </li>
                        </ul>
                        <hr className="border-base-300" />
                        <ul className="menu w-full p-2">
                            <li>
                                <div>
                                    <span className="iconify lucide--arrow-left-right size-4" />
                                    <span>Switch Account</span>
                                </div>
                            </li>
                            <li>
                                <Link className="text-error hover:bg-error/10" href="/auth/login">
                                    <span className="iconify lucide--log-out size-4" />
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
