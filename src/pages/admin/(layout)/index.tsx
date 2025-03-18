import { type ReactNode } from "react";

import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { adminMenuItems } from "./helpers";

const AdminLayout = ({ children }: { children: ReactNode }) => {
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

export default AdminLayout;
