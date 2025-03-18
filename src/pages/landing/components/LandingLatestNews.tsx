"use client";

import { useState } from "react";
import { Link } from "react-router";

export const LandingLatestNews = () => {
    const [show, setShow] = useState(false);

    return (
        <div
            className={`rounded-box flex flex-col transition-all ${show ? "bg-base-100 w-56 px-4 py-3 shadow" : "w-24"}`}>
            <div className="flex cursor-pointer items-center justify-between" onClick={() => setShow(!show)}>
                <p className="animated-text from-primary bg-linear-to-r via-blue-500 to-purple-500 text-lg font-medium">
                    New in v2.1
                </p>
                {show && (
                    <button className="btn btn-sm btn-circle" onClick={() => setShow(false)}>
                        <span className="iconify lucide--x size-3.5"></span>
                    </button>
                )}
            </div>
            <div className={`mt-1 transition-all ${!show ? "h-0 overflow-hidden" : "h-46"}`}>
                <Link to="/apps/gen-ai/home" className="hover:text-primary font-medium">
                    1. Gen Ai App
                </Link>
                <ul className="ms-2 mt-1 list-inside list-disc">
                    <li>Home</li>
                    <li>Content Creator</li>
                    <li>Image Gen</li>
                    <li>Library</li>
                </ul>
                <Link to="/pages/settings" className="hover:text-primary mt-2 block">
                    2. Setting Page
                </Link>
                <Link to="/pages/get-help" className="hover:text-primary block">
                    3. Help Page
                </Link>
            </div>
        </div>
    );
};
