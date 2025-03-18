import { type ReactNode } from "react";

import { Rightbar } from "./(layout)/components/Rightbar";
import { Sidebar } from "./(layout)/components/Sidebar";
import { Topbar } from "./(layout)/components/Topbar";
import { adminMenuItems } from "./(layout)/helpers";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="size-full" id="layout-main">
            <div className="flex">
                <Sidebar menuItems={adminMenuItems} />
                <div className="flex h-screen min-w-0 grow flex-col overflow-auto">
                    <Topbar />
                    <div id="layout-content">{children}</div>
                </div>
            </div>
            <Rightbar />
        </div>
    );
};

export default Layout;
