import Link from "next/link";

import { AiLibraryTableRow } from "./LibraryTableRow";
import { aiLibraryData } from "./helpers";

export const AiLibraryTable = () => {
    return (
        <>
            <div className="card bg-base-100 shadow">
                <div className="card-body p-0">
                    <div className="flex items-center justify-between px-5 pt-5">
                        <div className="inline-flex items-center gap-3">
                            <label className="input input-sm">
                                <span className="iconify lucide--search text-base-content/80 size-3.5" />
                                <input
                                    type="search"
                                    className="w-24 sm:w-36"
                                    placeholder="Search along items"
                                    aria-label="Search items"
                                />
                            </label>
                        </div>
                        <div className="inline-flex items-center gap-3">
                            <Link
                                href="/apps/gen-ai/image"
                                aria-label="Generate image link"
                                className="btn btn-primary btn-sm max-sm:btn-square">
                                <span className="iconify lucide--wand-2 size-3.5" />
                                <span className="max-sm:hidden">Generate</span>
                            </Link>
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost border-base-300 btn-sm btn-square"
                                    aria-label="More option">
                                    <span className="iconify lucide--settings-2 size-4" />
                                </div>
                                <div tabIndex={0} className="dropdown-content bg-base-100 rounded-box z-1 w-52 shadow">
                                    <ul className="menu w-full p-2">
                                        <li>
                                            <div>
                                                <span className="iconify lucide--wand size-4" />
                                                Bulk Actions
                                            </div>
                                        </li>
                                    </ul>
                                    <hr className="border-base-300" />
                                    <ul className="menu w-full p-2">
                                        <li>
                                            <div>
                                                <span className="iconify lucide--download-cloud size-4" />
                                                Import from Store
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="iconify lucide--copy-plus size-4" />
                                                Create from Existing
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 overflow-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        <input
                                            id="check_all"
                                            aria-label="Check all"
                                            type="checkbox"
                                            className="checkbox checkbox-sm"
                                        />
                                    </th>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Type</th>
                                    <th>Title</th>
                                    <th>Content</th>
                                    <th>Tokens</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {aiLibraryData.map((library) => (
                                    <AiLibraryTableRow {...library} key={library.id} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-between p-6">
                        <div className="text-base-content/80 flex gap-2 text-sm">
                            <span className="hidden sm:inline">Per page</span>
                            <select className="select select-xs w-18" defaultValue="10" aria-label="Per page">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                        <span className="text-base-content/80 hidden text-sm lg:inline">
                            Showing <span className="text-base-content font-medium">1 to 10</span> of 457 items
                        </span>
                        <div className="inline-flex items-center gap-1">
                            <button className="btn btn-circle sm:btn-sm btn-xs btn-ghost" aria-label="Prev">
                                <span className="iconify lucide--chevron-left"></span>
                            </button>
                            <button className="btn btn-primary btn-circle sm:btn-sm btn-xs">1</button>
                            <button className="btn btn-ghost btn-circle sm:btn-sm btn-xs">2</button>
                            <button className="btn btn-ghost btn-circle sm:btn-sm btn-xs">3</button>
                            <button className="btn btn-circle sm:btn-sm btn-xs btn-ghost" aria-label="Next">
                                <span className="iconify lucide--chevron-right"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <dialog id="apps-ai-library-delete" className="modal">
                <div className="modal-box">
                    <div className="flex items-center justify-between text-lg font-medium">
                        Confirm Delete
                        <form method="dialog">
                            <button className="btn btn-sm btn-ghost btn-circle" aria-label="Close modal">
                                <span className="iconify lucide--x size-4" />
                            </button>
                        </form>
                    </div>
                    <p className="py-4">You are about to delete this item. Would you like to proceed further ?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-ghost btn-sm">No</button>
                        </form>
                        <form method="dialog">
                            <button className="btn btn-sm btn-error">Yes, delete it</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};
