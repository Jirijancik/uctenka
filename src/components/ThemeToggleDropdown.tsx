"use client";

import { useConfig } from "@/contexts/config";

type IThemeToggleDropdown = {
    triggerClass?: string;
    dropdownClass?: string;
    dropdownContentClass?: string;
    iconClass?: string;
};

export const ThemeToggleDropdown = ({
    triggerClass,
    dropdownClass,
    dropdownContentClass,
    iconClass,
}: IThemeToggleDropdown) => {
    const { changeTheme } = useConfig();

    return (
        <>
            <div className={`dropdown ${dropdownClass}`}>
                <div tabIndex={0} role="button" className={`${triggerClass ?? ""}`} aria-label="Theme toggle">
                    <span
                        className={`iconify lucide--sun hidden size-4 group-data-[theme=light]/html:inline ${iconClass ?? ""}`}
                    />
                    <span
                        className={`iconify lucide--moon hidden size-4 group-data-[theme=dark]/html:inline ${iconClass ?? ""}`}
                    />
                    <span
                        className={`iconify lucide--monitor hidden size-4 group-[:not([data-theme])]/html:inline ${iconClass ?? ""}`}
                    />
                    <span
                        className={`iconify lucide--palette hidden size-4 group-data-[theme=contrast]/html:inline group-data-[theme=dim]/html:inline group-data-[theme=material]/html:inline ${iconClass ?? ""}`}
                    />
                </div>
                <ul
                    tabIndex={0}
                    className={`dropdown-content menu bg-base-100 rounded-box z-1 w-36 space-y-0.5 p-1 shadow-sm ${dropdownContentClass ?? ""}`}>
                    <li>
                        <div
                            className="group-data-[theme=light]/html:bg-base-200 flex gap-2"
                            onClick={() => changeTheme("light")}>
                            <span className="iconify lucide--sun size-4.5" />
                            <span className="font-medium">Light</span>
                        </div>
                    </li>
                    <li>
                        <div
                            className="group-data-[theme=dark]/html:bg-base-200 flex gap-2"
                            onClick={() => changeTheme("dark")}>
                            <span className="iconify lucide--moon size-4.5" />
                            <span className="font-medium">Dark</span>
                        </div>
                    </li>
                    <li>
                        <div
                            className="group-[:not([data-theme])]/html:bg-base-200 flex gap-2"
                            onClick={() => changeTheme("system")}>
                            <span className="iconify lucide--monitor size-4.5" />
                            <span className="font-medium">System</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};
