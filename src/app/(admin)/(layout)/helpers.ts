import { ISidebarMenuItem } from "./components/SidebarMenuItem";

export const adminMenuItems: ISidebarMenuItem[] = [
    {
        id: "dashboards",
        icon: "lucide--monitor-dot",
        label: "Dashboard",
        children: [
            {
                id: "dashboards-ecommerce",
                label: "Ecommerce",
                url: "/dashboards/ecommerce",
            },
            {
                id: "dashboards-crm",
                label: "CRM",
                url: "/dashboards/crm",
            },
        ],
    },
    {
        id: "apps-label",
        isTitle: true,
        label: "Apps",
    },
    {
        id: "apps-ecommerce",
        icon: "lucide--store",
        label: "Ecommerce",
        children: [
            {
                id: "apps-ecommerce-orders",
                label: "Orders",
                url: "/apps/ecommerce/orders",
            },
            {
                id: "apps-ecommerce-products",
                label: "Products",
                url: "/apps/ecommerce/products",
            },
            {
                id: "apps-ecommerce-sellers",
                label: "Sellers",
                url: "/apps/ecommerce/sellers",
            },
            {
                id: "apps-ecommerce-customers",
                label: "Customers",
                url: "/apps/ecommerce/customers",
            },
            {
                id: "apps-ecommerce-shops",
                label: "Shops",
                url: "/apps/ecommerce/shops",
            },
        ],
    },
    {
        id: "apps-ai",
        icon: "lucide--brain-circuit",
        label: "Gen AI",
        badges: ["new"],
        children: [
            {
                id: "apps-ai-home",
                label: "Home",
                url: "/apps/gen-ai/home",
            },
            {
                id: "apps-ai-content",
                label: "Content",
                url: "/apps/gen-ai/content",
            },
            {
                id: "apps-ai-image",
                label: "Image",
                url: "/apps/gen-ai/image",
            },
            {
                id: "apps-ai-library",
                label: "Library",
                url: "/apps/gen-ai/library",
            },
        ],
    },
    {
        id: "apps-file-manager",
        icon: "lucide--server",
        label: "File Manager",
        url: "/apps/file-manager",
    },
    {
        id: "apps-chat",
        icon: "lucide--messages-square",
        label: "Chat",
        url: "/apps/chat",
    },

    {
        id: "label-pages",
        isTitle: true,
        label: "Pages",
    },
    {
        id: "landing",
        icon: "lucide--file",
        label: "Landing",
        url: "/landing",
    },
    {
        id: "auth",
        icon: "lucide--shield-check",
        label: "Auth",
        children: [
            {
                id: "auth-login",
                label: "Login",
                url: "/auth/login",
            },
            {
                id: "auth-register",
                label: "Register",
                url: "/auth/register",
            },
            {
                id: "auth-forgot-password",
                label: "Forgot Password",
                url: "/auth/forgot-password",
            },
            {
                id: "auth-reset-password",
                label: "Reset Password",
                url: "/auth/reset-password",
            },
        ],
    },
    {
        id: "label-ui-showcase",
        isTitle: true,
        label: "UI Showcase",
    },
    {
        id: "components",
        icon: "lucide--package",
        label: "Components",
        children: [
            {
                id: "components-accordion",
                label: "Accordion",
                url: "/ui/components/accordion",
            },
            {
                id: "components-alert",
                label: "Alert",
                url: "/ui/components/alert",
            },
            {
                id: "components-avatar",
                label: "Avatar",
                url: "/ui/components/avatar",
            },
            {
                id: "components-badge",
                label: "Badge",
                url: "/ui/components/badge",
            },
            {
                id: "components-breadcrumb",
                label: "Breadcrumb",
                url: "/ui/components/breadcrumb",
            },
            {
                id: "components-button",
                label: "Button",
                url: "/ui/components/button",
            },
            {
                id: "components-countdown",
                label: "Countdown",
                url: "/ui/components/countdown",
            },
            {
                id: "components-drawer",
                label: "Drawer",
                url: "/ui/components/drawer",
            },
            {
                id: "components-dropdown",
                label: "Dropdown",
                url: "/ui/components/dropdown",
            },
            {
                id: "components-indicator",
                label: "Indicator",
                url: "/ui/components/indicator",
            },

            {
                id: "components-loading",
                label: "Loading",
                url: "/ui/components/loading",
            },
            {
                id: "components-menu",
                label: "Menu",
                url: "/ui/components/menu",
            },
            {
                id: "components-modal",
                label: "Modal",
                url: "/ui/components/modal",
            },

            {
                id: "components-pagination",
                label: "Pagination",
                url: "/ui/components/pagination",
            },
            {
                id: "components-progress",
                label: "Progress",
                url: "/ui/components/progress",
            },
            {
                id: "components-step",
                label: "Step",
                url: "/ui/components/step",
            },
            {
                id: "components-tab",
                label: "Tab",
                url: "/ui/components/tab",
            },
            {
                id: "components-table",
                label: "Table",
                url: "/ui/components/table",
            },
            {
                id: "components-timeline",
                label: "Timeline",
                url: "/ui/components/timeline",
            },
            {
                id: "components-toast",
                label: "Toast",
                url: "/ui/components/toast",
            },

            {
                id: "components-tooltip",
                label: "Tooltip",
                url: "/ui/components/tooltip",
            },
        ],
    },
    {
        id: "ui-forms",
        icon: "lucide--file-text",
        label: "Forms",
        children: [
            {
                id: "ui-forms-checkbox",
                label: "Checkbox",
                url: "/ui/forms/checkbox",
            },
            {
                id: "ui-forms-fieldset",
                label: "Fieldset",
                url: "/ui/forms/fieldset",
            },
            {
                id: "ui-forms-file",
                label: "File Input",
                url: "/ui/forms/file-input",
            },

            {
                id: "ui-forms-input",
                label: "Input",
                url: "/ui/forms/input",
            },
            {
                id: "ui-forms-label",
                label: "Label",
                url: "/ui/forms/label",
            },

            {
                id: "ui-forms-radio",
                label: "Radio",
                url: "/ui/forms/radio",
            },

            {
                id: "ui-forms-range",
                label: "Range",
                url: "/ui/forms/range",
            },

            {
                id: "ui-forms-rating",
                label: "Rating",
                url: "/ui/forms/rating",
            },
            {
                id: "ui-forms-select",
                label: "Select",
                url: "/ui/forms/select",
            },
            {
                id: "ui-forms-textarea",
                label: "Textarea",
                url: "/ui/forms/textarea",
            },

            {
                id: "ui-forms-toggle",
                label: "Toggle",
                url: "/ui/forms/toggle",
            },

            {
                id: "ui-forms-validator",
                label: "Validator",
                url: "/ui/forms/validator",
            },
        ],
    },
    {
        id: "charts",
        icon: "lucide--bar-chart-big",
        label: "Charts",
        children: [
            {
                id: "charts-apex",
                label: "Apex",
                children: [
                    {
                        id: "charts-apex-area",
                        label: "Area",
                        url: "/ui/charts/apex/area",
                    },
                    {
                        id: "charts-apex-bar",
                        label: "Bar",
                        url: "/ui/charts/apex/bar",
                    },
                    {
                        id: "charts-apex-column",
                        label: "Column",
                        url: "/ui/charts/apex/column",
                    },
                    {
                        id: "charts-apex-line",
                        label: "Line",
                        url: "/ui/charts/apex/line",
                    },
                    {
                        id: "charts-apex-pie",
                        label: "Pie",
                        url: "/ui/charts/apex/pie",
                    },
                ],
            },
        ],
    },
    {
        id: "label-other",
        isTitle: true,
        label: "Other",
    },
    {
        id: "menu-demo-levels",
        icon: "lucide--align-center",
        label: "Menu Levels",
        children: [
            {
                id: "menu-demo-level-1a",
                label: "Level 1a",
                url: "#",
            },
            {
                id: "menu-demo-level-1b",
                label: "Level 1b",
                children: [
                    {
                        id: "menu-demo-level-2a",
                        label: "Level 2a",
                        url: "#",
                    },
                    {
                        id: "menu-demo-level-2b",
                        label: "Level 2b",
                        children: [
                            {
                                id: "menu-demo-level-3a",
                                label: "Level 3a",
                                url: "#",
                            },
                            {
                                id: "menu-demo-level-3b",
                                label: "Level 3b",
                                url: "#",
                            },
                        ],
                    },
                ],
            },
        ],
    },

    {
        id: "external-links",
        icon: "lucide--external-link",
        url: "https://google.com",
        label: "External Links",
        linkProp: {
            target: "_blank",
        },
    },
    {
        id: "menu-demo-other-label",
        icon: "lucide--award",
        label: "Label",
        url: "#",
        badges: ["+8"],
    },
    {
        id: "docs",
        icon: "lucide--book-open-text",
        label: "Documentation",
        url: "https://nexus.daisyui.com/docs",
        linkProp: {
            target: "_blank",
        },
    },
];

const findItem = (menuItems: ISidebarMenuItem[], url: string): ISidebarMenuItem | null => {
    for (const item of menuItems) {
        if (item.url == url) {
            return item;
        }
        if (item.children) {
            const fItem = findItem(item.children, url);
            if (fItem) {
                return fItem;
            }
        }
    }
    return null;
};

export const getActivatedItemParentKeys = (menuItems: ISidebarMenuItem[], url: string): string[] => {
    const menuItem = findItem(menuItems, url);

    if (!menuItem) return [];
    const list = [];

    for (const item of menuItems) {
        if (item.id == menuItem.id) {
            list.push(item.id);
        }
        if (item.children) {
            for (const iItem of item.children) {
                if (iItem.id == menuItem.id) {
                    list.push(item.id);
                    list.push(iItem.id);
                }
                if (iItem.children != null) {
                    for (const i2Item of iItem.children) {
                        if (i2Item.id == menuItem.id) {
                            list.push(item.id);
                            list.push(iItem.id);
                            list.push(i2Item.id);
                        }
                    }
                }
            }
        }
    }
    return list;
};
