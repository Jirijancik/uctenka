import { JSX, LazyExoticComponent, lazy } from "react";
import { RouteProps } from "react-router";

// import { docsRoutes } from "@/pages/docs/routes";

export type IRoutesProps = {
    path: RouteProps["path"];
    element: RouteProps["element"];
};

// Component Wrapper
const cw = (Component: LazyExoticComponent<() => JSX.Element>) => {
    return <Component />;
};

const dashboardRoutes: IRoutesProps[] = [
    {
        path: "/dashboards/ecommerce",
        element: cw(lazy(() => import("@/pages/admin/dashboards/ecommerce"))),
    },
    {
        path: "/dashboards/crm",
        element: cw(lazy(() => import("@/pages/admin/dashboards/crm"))),
    },
];

const appRoutes: IRoutesProps[] = [
    {
        path: "/apps/ecommerce/products",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/products"))),
    },
    {
        path: "/apps/ecommerce/products/create",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/products/create"))),
    },
    {
        path: "/apps/ecommerce/products/:id",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/products/edit"))),
    },
    {
        path: "/apps/ecommerce/orders",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/orders"))),
    },
    {
        path: "/apps/ecommerce/orders/:id",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/orders/edit"))),
    },
    {
        path: "/apps/ecommerce/sellers",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/sellers"))),
    },
    {
        path: "/apps/ecommerce/sellers/create",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/sellers/create"))),
    },
    {
        path: "/apps/ecommerce/sellers/:id",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/sellers/edit"))),
    },
    {
        path: "/apps/ecommerce/customers",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/customers"))),
    },
    {
        path: "/apps/ecommerce/customers/create",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/customers/create"))),
    },
    {
        path: "/apps/ecommerce/customers/:id",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/customers/edit"))),
    },
    {
        path: "/apps/ecommerce/shops",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/shops"))),
    },
    {
        path: "/apps/ecommerce/shops/create",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/shops/create"))),
    },
    {
        path: "/apps/ecommerce/shops/:id",
        element: cw(lazy(() => import("@/pages/admin/apps/ecommerce/shops/edit"))),
    },
    {
        path: "/apps/gen-ai/home",
        element: cw(lazy(() => import("@/pages/admin/apps/gen-ai/home"))),
    },
    {
        path: "/apps/gen-ai/content",
        element: cw(lazy(() => import("@/pages/admin/apps/gen-ai/content"))),
    },
    {
        path: "/apps/gen-ai/image",
        element: cw(lazy(() => import("@/pages/admin/apps/gen-ai/image"))),
    },
    {
        path: "/apps/gen-ai/library",
        element: cw(lazy(() => import("@/pages/admin/apps/gen-ai/library"))),
    },
    {
        path: "/apps/file-manager",
        element: cw(lazy(() => import("@/pages/admin/apps/file-manager"))),
    },
    {
        path: "/apps/chat",
        element: cw(lazy(() => import("@/pages/admin/apps/chat"))),
    },
];

const componentRoutes: IRoutesProps[] = [
    {
        path: "/ui/components/accordion",
        element: cw(lazy(() => import("@/pages/admin/ui/components/accordion"))),
    },
    {
        path: "/ui/components/alert",
        element: cw(lazy(() => import("@/pages/admin/ui/components/alert"))),
    },
    {
        path: "/ui/components/avatar",
        element: cw(lazy(() => import("@/pages/admin/ui/components/avatar"))),
    },
    {
        path: "/ui/components/badge",
        element: cw(lazy(() => import("@/pages/admin/ui/components/badge"))),
    },

    {
        path: "/ui/components/breadcrumb",
        element: cw(lazy(() => import("@/pages/admin/ui/components/breadcrumb"))),
    },

    {
        path: "/ui/components/button",
        element: cw(lazy(() => import("@/pages/admin/ui/components/button"))),
    },
    {
        path: "/ui/components/countdown",
        element: cw(lazy(() => import("@/pages/admin/ui/components/countdown"))),
    },
    {
        path: "/ui/components/drawer",
        element: cw(lazy(() => import("@/pages/admin/ui/components/drawer"))),
    },
    {
        path: "/ui/components/dropdown",
        element: cw(lazy(() => import("@/pages/admin/ui/components/dropdown"))),
    },
    {
        path: "/ui/components/indicator",
        element: cw(lazy(() => import("@/pages/admin/ui/components/indicator"))),
    },
    {
        path: "/ui/components/loading",
        element: cw(lazy(() => import("@/pages/admin/ui/components/loading"))),
    },
    {
        path: "/ui/components/menu",
        element: cw(lazy(() => import("@/pages/admin/ui/components/menu"))),
    },
    {
        path: "/ui/components/modal",
        element: cw(lazy(() => import("@/pages/admin/ui/components/modal"))),
    },

    {
        path: "/ui/components/pagination",
        element: cw(lazy(() => import("@/pages/admin/ui/components/pagination"))),
    },
    {
        path: "/ui/components/progress",
        element: cw(lazy(() => import("@/pages/admin/ui/components/progress"))),
    },
    {
        path: "/ui/components/step",
        element: cw(lazy(() => import("@/pages/admin/ui/components/step"))),
    },
    {
        path: "/ui/components/tab",
        element: cw(lazy(() => import("@/pages/admin/ui/components/tab"))),
    },
    {
        path: "/ui/components/table",
        element: cw(lazy(() => import("@/pages/admin/ui/components/table"))),
    },
    {
        path: "/ui/components/timeline",
        element: cw(lazy(() => import("@/pages/admin/ui/components/timeline"))),
    },
    {
        path: "/ui/components/toast",
        element: cw(lazy(() => import("@/pages/admin/ui/components/toast"))),
    },
    {
        path: "/ui/components/tooltip",
        element: cw(lazy(() => import("@/pages/admin/ui/components/tooltip"))),
    },
];

const formRoutes: IRoutesProps[] = [
    {
        path: "/ui/forms/checkbox",
        element: cw(lazy(() => import("@/pages/admin/ui/forms/checkbox"))),
    },
    {
        path: "/ui/forms/fieldset",
        element: cw(lazy(() => import("@/pages/admin/ui/forms/fieldset"))),
    },
    {
        path: "/ui/forms/file-input",
        element: cw(lazy(() => import("@/pages/admin/ui/forms/file-input"))),
    },
    {
        path: "/ui/forms/input",
        element: cw(lazy(() => import("@/pages/admin/ui/forms/input"))),
    },
    {
        path: "/ui/forms/label",
        element: cw(lazy(() => import("@/pages/admin/ui/forms/label"))),
    },
    {
        path: "/ui/forms/radio",
        element: cw(lazy(() => import("@/pages/admin/ui/forms/radio"))),
    },
    {
        path: "/ui/forms/range",
        element: cw(lazy(() => import("@/pages/admin/ui/forms/range"))),
    },
    {
        path: "/ui/forms/rating",
        element: cw(lazy(() => import("@/pages/admin/ui/forms/rating"))),
    },
    {
        path: "/ui/forms/select",
        element: cw(lazy(() => import("@/pages/admin/ui/forms/select"))),
    },
    {
        path: "/ui/forms/textarea",
        element: cw(lazy(() => import("@/pages/admin/ui/forms/textarea"))),
    },
    {
        path: "/ui/forms/toggle",
        element: cw(lazy(() => import("@/pages/admin/ui/forms/toggle"))),
    },
    {
        path: "/ui/forms/validator",
        element: cw(lazy(() => import("@/pages/admin/ui/forms/validator"))),
    },
];

const chartsRoutes: IRoutesProps[] = [
    {
        path: "/ui/charts/apex/area",
        element: cw(lazy(() => import("@/pages/admin/ui/charts/apex/area"))),
    },
    {
        path: "/ui/charts/apex/bar",
        element: cw(lazy(() => import("@/pages/admin/ui/charts/apex/bar"))),
    },
    {
        path: "/ui/charts/apex/column",
        element: cw(lazy(() => import("@/pages/admin/ui/charts/apex/column"))),
    },
    {
        path: "/ui/charts/apex/line",
        element: cw(lazy(() => import("@/pages/admin/ui/charts/apex/line"))),
    },
    {
        path: "/ui/charts/apex/pie",
        element: cw(lazy(() => import("@/pages/admin/ui/charts/apex/pie"))),
    },
];

const authRoutes: IRoutesProps[] = [
    {
        path: "/auth/login",
        element: cw(lazy(() => import("@/pages/auth/login"))),
    },
    {
        path: "/auth/register",
        element: cw(lazy(() => import("@/pages/auth/register"))),
    },
    {
        path: "/auth/forgot-password",
        element: cw(lazy(() => import("@/pages/auth/forgot-password"))),
    },
    {
        path: "/auth/reset-password",
        element: cw(lazy(() => import("@/pages/auth/reset-password"))),
    },
];

const pagesRoutes: IRoutesProps[] = [
    {
        path: "/pages/settings",
        element: cw(lazy(() => import("@/pages/admin/pages/settings"))),
    },
    {
        path: "/pages/get-help",
        element: cw(lazy(() => import("@/pages/admin/pages/get-help"))),
    },
];

const otherRoutes: IRoutesProps[] = [
    {
        path: "/",
        element: cw(lazy(() => import("@/pages/landing"))),
    },
    {
        path: "/landing",
        element: cw(lazy(() => import("@/pages/landing"))),
    },
    {
        path: "/*",
        element: cw(lazy(() => import("@/pages/not-found"))),
    },
];

export const registerRoutes = {
    admin: [...dashboardRoutes, ...appRoutes, ...componentRoutes, ...formRoutes, ...chartsRoutes, ...pagesRoutes],
    auth: authRoutes,
    other: otherRoutes,
};
