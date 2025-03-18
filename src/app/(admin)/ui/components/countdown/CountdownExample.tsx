"use client";

import { useEffect, useState } from "react";

const CountdownExample = () => {
    const [value, setValue] = useState<number>(59);

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue((v) => (v <= 0 ? 59 : v - 1));
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return (
        <>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4">
                            <span className="countdown">
                                <span style={{ "--value": value }}></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Clock</div>
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                            <span className="countdown">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            <span>:</span>
                            <span className="countdown">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            <span>:</span>
                            <span className="countdown">
                                <span style={{ "--value": value }}></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Label</div>
                        <div className="mt-4 flex flex-wrap gap-5 text-center">
                            <div className="flex flex-col">
                                <span className="countdown text-xl md:text-5xl">
                                    <span style={{ "--value": 15 }}></span>
                                </span>
                                Days
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown text-xl md:text-5xl">
                                    <span style={{ "--value": 10 }}></span>
                                </span>
                                Hours
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown text-xl md:text-5xl">
                                    <span style={{ "--value": 24 }}></span>
                                </span>
                                Minutes
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown text-xl md:text-5xl">
                                    <span style={{ "--value": value }}></span>
                                </span>
                                Seconds
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Boxed</div>
                        <div className="mt-4 flex flex-wrap gap-3 text-center md:gap-5">
                            <div className="bg-base-200 rounded-box flex flex-col items-center gap-1 p-3 text-sm">
                                <span className="countdown text-xl md:text-3xl">
                                    <span style={{ "--value": 15 }}></span>
                                </span>
                                Days
                            </div>
                            <div className="bg-base-200 rounded-box flex flex-col items-center gap-1 p-3 text-sm">
                                <span className="countdown text-xl md:text-3xl">
                                    <span style={{ "--value": 10 }}></span>
                                </span>
                                Hours
                            </div>
                            <div className="bg-base-200 rounded-box flex flex-col items-center gap-1 p-3 text-sm">
                                <span className="countdown text-xl md:text-3xl">
                                    <span style={{ "--value": 24 }}></span>
                                </span>
                                Minutes
                            </div>
                            <div className="bg-base-200 rounded-box flex flex-col items-center gap-1 p-3 text-sm">
                                <span className="countdown text-xl md:text-3xl">
                                    <span style={{ "--value": value }}></span>
                                </span>
                                Seconds
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountdownExample;
