"use client";

export const TopbarNotificationButton = () => {
    const closeMenu = () => {
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    };

    return (
        <div className="dropdown dropdown-bottom sm:dropdown-end max-sm:dropdown-center">
            <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-sm" aria-label="Notifications">
                <span className="iconify lucide--bell size-4.5" />
            </div>
            <div
                tabIndex={0}
                className="dropdown-content bg-base-100 rounded-box card card-compact mt-5 w-60 p-2 shadow sm:w-84">
                <div className="flex items-center justify-between px-2">
                    <p className="text-base font-medium">Notification</p>
                    <button
                        tabIndex={0}
                        className="btn btn-sm btn-circle btn-ghost"
                        onClick={closeMenu}
                        aria-label="Close">
                        <span className="iconify lucide--x size-4" />
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <div className="badge badge-sm badge-primary badge-soft">Today</div>
                </div>
                <div className="mt-2">
                    <div className="rounded-box hover:bg-base-200 flex cursor-pointer gap-3 px-2 py-1.5 transition-all">
                        <img
                            src="/images/avatars/4.png"
                            className="bg-base-200 mask mask-squircle size-10 p-0.5"
                            alt=""
                        />
                        <div className="grow">
                            <p className="text-sm leading-tight">Customer has requested a return for item</p>
                            <p className="text-base-content/60 text-end text-xs leading-tight">1 Hour ago</p>
                        </div>
                    </div>
                    <div className="rounded-box hover:bg-base-200 flex cursor-pointer gap-3 px-2 py-1.5 transition-all">
                        <img
                            src="/images/avatars/5.png"
                            className="bg-base-200 mask mask-squircle size-10 p-0.5"
                            alt=""
                        />
                        <div className="grow">
                            <p className="text-sm leading-tight">A new review has been submitted for product</p>
                            <p className="text-base-content/60 text-end text-xs leading-tight">1 Hour ago</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2 flex items-center justify-center">
                    <div className="badge badge-sm">Previous</div>
                </div>
                <div className="mt-2">
                    <div className="rounded-box hover:bg-base-200 flex cursor-pointer gap-3 px-2 py-1.5 transition-all">
                        <img
                            src="/images/avatars/1.png"
                            className="bg-base-200 mask mask-squircle size-10 p-0.5"
                            alt=""
                        />
                        <div className="grow">
                            <p className="text-sm leading-tight">Prepare for the upcoming weekend promotion</p>
                            <p className="text-base-content/60 text-end text-xs leading-tight">2 Days ago</p>
                        </div>
                    </div>

                    <div className="rounded-box hover:bg-base-200 flex cursor-pointer gap-3 px-2 py-1.5 transition-all">
                        <img
                            src="/images/avatars/2.png"
                            className="bg-base-200 mask mask-squircle size-10 p-0.5"
                            alt=""
                        />
                        <div className="grow">
                            <p className="text-sm leading-tight">Product &apos;ABC123&apos; is running low in stock.</p>
                            <p className="text-base-content/60 text-end text-xs leading-tight">3 Days ago</p>
                        </div>
                    </div>
                    <div className="rounded-box hover:bg-base-200 flex cursor-pointer gap-3 px-2 py-1.5 transition-all">
                        <img
                            src="/images/avatars/3.png"
                            className="bg-base-200 mask mask-squircle size-10 p-0.5"
                            alt=""
                        />
                        <div className="grow">
                            <p className="text-sm leading-tight">Payment received for Order ID: #67890</p>
                            <p className="text-base-content/60 text-end text-xs leading-tight">Week ago</p>
                        </div>
                    </div>
                </div>
                <hr className="border-base-300 -mx-2 mt-2" />
                <div className="flex items-center justify-between pt-2">
                    <button className="btn btn-sm btn-ghost">Mark as read</button>
                    <button className="btn btn-sm btn-soft btn-primary">View All</button>
                </div>
            </div>
        </div>
    );
};
