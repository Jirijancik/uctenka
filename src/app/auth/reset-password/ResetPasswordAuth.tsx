"use client";

import Link from "next/link";
import React, { useState } from "react";

export const ResetPasswordAuth = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <label className="input w-full focus:outline-0">
                    <span className="iconify lucide--key-round text-base-content/80 size-5"></span>
                    <input
                        className="grow focus:outline-0"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                    />
                    <button
                        className="btn btn-xs btn-ghost btn-circle"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="Password">
                        {showPassword ? (
                            <span className="iconify lucide--eye-off size-4" />
                        ) : (
                            <span className="iconify lucide--eye size-4" />
                        )}
                    </button>
                </label>
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Confirm Password</legend>
                <label className="input w-full focus:outline-0">
                    <span className="iconify lucide--key-round text-base-content/80 size-5"></span>
                    <input
                        className="grow focus:outline-0"
                        placeholder="Confirm Password"
                        type={showPassword ? "text" : "password"}
                    />
                    <button
                        className="btn btn-xs btn-ghost btn-circle"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="Password">
                        {showPassword ? (
                            <span className="iconify lucide--eye-off size-4" />
                        ) : (
                            <span className="iconify lucide--eye size-4" />
                        )}
                    </button>
                </label>
            </fieldset>

            <div className="mt-4 flex items-center gap-3 md:mt-6">
                <input
                    className="checkbox checkbox-sm checkbox-primary"
                    aria-label="Checkbox example"
                    type="checkbox"
                    id="agreement"
                />
                <label htmlFor="agreement" className="text-sm">
                    I agree with
                    <span className="text-primary ms-1 cursor-pointer hover:underline">terms and conditions</span>
                </label>
            </div>

            <Link href="/dashboards/ecommerce" className="btn btn-primary btn-wide mt-4 max-w-full gap-3 md:mt-6">
                <span className="iconify lucide--check size-4" />
                Change Password
            </Link>

            <p className="mt-4 text-center text-sm md:mt-6">
                Go to
                <Link className="text-primary ms-1.5 hover:underline" href="/auth/login">
                    Login
                </Link>
            </p>
        </>
    );
};
