import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { Logo } from "@/components/Logo";
import { ThemeToggleDropdown } from "@/components/ThemeToggleDropdown";

import { LoginAuth } from "./LoginAuth";

export const metadata: Metadata = {
    title: "Login",
};

const LoginPage = () => {
    return (
        <div className="flex flex-col items-stretch p-6 md:p-8 lg:p-16">
            <div className="flex items-center justify-between">
                <Link href="/dashboards/ecommerce">
                    <Logo />
                </Link>
                <ThemeToggleDropdown
                    triggerClass="btn btn-circle btn-outline border-base-300"
                    dropdownClass="dropdown-end"
                />
            </div>
            <h3 className="mt-8 text-center text-xl font-semibold md:mt-12 lg:mt-24">Login</h3>
            <h3 className="text-base-content/70 mt-2 text-center text-sm">
                Seamless Access, Secure Connection: Your Gateway to a Personalized Experience.
            </h3>
            <div className="mt-6 md:mt-10">
                <LoginAuth />
            </div>
        </div>
    );
};

export default LoginPage;
