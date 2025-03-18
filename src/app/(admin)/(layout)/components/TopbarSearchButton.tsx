"use client";

export const TopbarSearchButton = () => {
    return (
        <>
            <button
                className="btn btn-outline btn-sm btn-ghost border-base-300 text-base-content/70 hidden h-9 w-48 justify-start gap-2 !text-sm md:flex"
                onClick={() => document.querySelector<HTMLDialogElement>("#topbar-search-modal")?.showModal()}>
                <span className="iconify lucide--search size-4" />
                <span>Search</span>
            </button>
            <button
                className="btn btn-outline btn-sm btn-square btn-ghost border-base-300 text-base-content/70 flex size-9 md:hidden"
                aria-label="Search"
                onClick={() => document.querySelector<HTMLDialogElement>("#topbar-search-modal")?.showModal()}>
                <span className="iconify lucide--search size-4" />
            </button>
            <dialog id="topbar-search-modal" className="modal p-0">
                <div className="modal-box p-0">
                    <div className="input border-base-300 w-full rounded-none border-0 border-b focus:!outline-0 active:!outline-0">
                        <span className="iconify lucide--search text-base-content/60 size-4.5" />
                        <input type="search" className="grow" placeholder="Search" aria-label="Search" />
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost" aria-label="Close">
                                <span className="iconify lucide--x text-base-content/80 size-4" />
                            </button>
                        </form>
                    </div>
                    <ul className="menu w-full pt-0">
                        <li className="menu-title">Actions</li>
                        <li>
                            <div>
                                <span className="iconify lucide--folder-plus size-4.5" />
                                <p className="grow text-sm">Create a new folder</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span className="iconify lucide--file-plus size-4.5" />
                                <p className="grow text-sm">Upload new document</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span className="iconify lucide--user-plus size-4.5" />
                                <p className="grow text-sm">Invite to project</p>
                            </div>
                        </li>
                    </ul>
                    <hr className="border-base-300 h-px" />
                    <ul className="menu w-full pt-0">
                        <li className="menu-title">Quick Links</li>
                        <li>
                            <div>
                                <span className="iconify lucide--folders size-4.5" />
                                <p className="grow text-sm">File Manager</p>
                            </div>
                        </li>

                        <li>
                            <div>
                                <span className="iconify lucide--user size-4.5" />
                                <p className="grow text-sm">Profile</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span className="iconify lucide--layout-dashboard size-4.5" />
                                <p className="grow text-sm">Dashboard</p>
                            </div>
                        </li>

                        <li>
                            <div>
                                <span className="iconify lucide--help-circle size-4.5" />
                                <p className="grow text-sm">Support</p>
                            </div>
                        </li>

                        <li>
                            <div>
                                <span className="iconify lucide--keyboard size-4.5" />
                                <p className="grow text-sm">Keyboard Shortcuts</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};
