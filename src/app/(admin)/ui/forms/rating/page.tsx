import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Rating - Forms",
};

const FormRatingPage = () => {
    return (
        <>
            <PageTitle title="Rating" items={[{ label: "Forms" }, { label: "Rating", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4">
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="1 star" />
                                <input
                                    type="radio"
                                    name="rating-1"
                                    className="mask mask-star"
                                    aria-label="2 star"
                                    defaultChecked
                                />
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="3 star" />
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="4 star" />
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="5 star" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Color</div>
                        <div className="mt-4">
                            <div className="rating">
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="1 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="2 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="3 star"
                                    defaultChecked
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="4 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="5 star"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Hearts</div>
                        <div className="mt-4">
                            <div className="rating gap-1">
                                <input
                                    type="radio"
                                    name="rating-3"
                                    className="mask mask-heart bg-red-400"
                                    aria-label="1 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-3"
                                    className="mask mask-heart bg-orange-400"
                                    aria-label="2 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-3"
                                    className="mask mask-heart bg-yellow-400"
                                    aria-label="3 star"
                                    defaultChecked
                                />
                                <input
                                    type="radio"
                                    name="rating-3"
                                    className="mask mask-heart bg-lime-400"
                                    aria-label="4 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-3"
                                    className="mask mask-heart bg-green-400"
                                    aria-label="5 star"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Half</div>
                        <div className="mt-4">
                            <div className="rating rating-lg rating-half">
                                <input
                                    type="radio"
                                    name="rating-11"
                                    className="mask mask-star-2 mask-half-1 bg-green-500"
                                    aria-label="0.5 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-11"
                                    className="mask mask-star-2 mask-half-2 bg-green-500"
                                    aria-label="1 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-11"
                                    className="mask mask-star-2 mask-half-1 bg-green-500"
                                    aria-label="1.5 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-11"
                                    className="mask mask-star-2 mask-half-2 bg-green-500"
                                    aria-label="2 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-11"
                                    className="mask mask-star-2 mask-half-1 bg-green-500"
                                    aria-label="2.5 star"
                                    defaultChecked
                                />
                                <input
                                    type="radio"
                                    name="rating-11"
                                    className="mask mask-star-2 mask-half-2 bg-green-500"
                                    aria-label="3 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-11"
                                    className="mask mask-star-2 mask-half-1 bg-green-500"
                                    aria-label="3.5 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-11"
                                    className="mask mask-star-2 mask-half-2 bg-green-500"
                                    aria-label="4 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-11"
                                    className="mask mask-star-2 mask-half-1 bg-green-500"
                                    aria-label="4.5 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-11"
                                    className="mask mask-star-2 mask-half-2 bg-green-500"
                                    aria-label="5 star"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Size</div>
                        <div className="mt-4 flex flex-col items-center gap-3">
                            <div className="rating rating-xs">
                                <input
                                    type="radio"
                                    name="rating-5"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="1 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-5"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="2 star"
                                    defaultChecked
                                />
                                <input
                                    type="radio"
                                    name="rating-5"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="3 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-5"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="4 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-5"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="5 star"
                                />
                            </div>
                            <div className="rating rating-sm">
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="1 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="2 star"
                                    defaultChecked
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="3 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="4 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="5 star"
                                />
                            </div>
                            <div className="rating rating-md">
                                <input
                                    type="radio"
                                    name="rating-7"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="1 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-7"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="2 star"
                                    defaultChecked
                                />
                                <input
                                    type="radio"
                                    name="rating-7"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="3 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-7"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="4 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-7"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="5 star"
                                />
                            </div>
                            <div className="rating rating-lg">
                                <input
                                    type="radio"
                                    name="rating-8"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="1 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-8"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="2 star"
                                    defaultChecked
                                />
                                <input
                                    type="radio"
                                    name="rating-8"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="3 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-8"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="4 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-8"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="5 star"
                                />
                            </div>
                            <div className="rating rating-xl">
                                <input
                                    type="radio"
                                    name="rating-9"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="1 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-9"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="2 star"
                                    defaultChecked
                                />
                                <input
                                    type="radio"
                                    name="rating-9"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="3 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-9"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="4 star"
                                />
                                <input
                                    type="radio"
                                    name="rating-9"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="5 star"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormRatingPage;
