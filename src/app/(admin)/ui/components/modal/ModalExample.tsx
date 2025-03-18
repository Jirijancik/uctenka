"use client";

const ModalExample = () => {
    return (
        <div className="grid gap-6 lg:grid-cols-2">
            <div className="card card-border bg-base-100">
                <div className="card-body">
                    <div className="card-title">Default</div>
                    <div className="mt-4">
                        <button
                            className="btn"
                            onClick={() => document.querySelector<HTMLDialogElement>("#demo-modal-1")?.showModal()}>
                            Open
                        </button>
                        <dialog id="demo-modal-1" className="modal">
                            <div className="modal-box">
                                <h3 className="text-lg font-medium">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="card-body">
                    <div className="card-title">Close: Button</div>
                    <div className="mt-4">
                        <button
                            className="btn"
                            onClick={() => document.querySelector<HTMLDialogElement>("#demo-modal-2")?.showModal()}>
                            Open
                        </button>
                        <dialog id="demo-modal-2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
                                        <span className="iconify lucide--x size-4" />
                                    </button>
                                </form>
                                <h3 className="text-lg font-medium">Hello!</h3>
                                <p className="py-4">Press ESC key or click on x button to close</p>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="card-body">
                    <div className="card-title">Close: Outside</div>
                    <div className="mt-4">
                        <button
                            className="btn"
                            onClick={() => document.querySelector<HTMLDialogElement>("#demo-modal-3")?.showModal()}>
                            Open
                        </button>
                        <dialog id="demo-modal-3" className="modal">
                            <div className="modal-box">
                                <h3 className="text-lg font-medium">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="card-body">
                    <div className="card-title">Close: Button & Outside</div>
                    <div className="mt-4">
                        <button
                            className="btn"
                            onClick={() => document.querySelector<HTMLDialogElement>("#demo-modal-4")?.showModal()}>
                            Open
                        </button>
                        <dialog id="demo-modal-4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
                                        <span className="iconify lucide--x size-4" />
                                    </button>
                                </form>
                                <h3 className="text-lg font-medium">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="card-body">
                    <div className="card-title">
                        Using: Anchor <span className="text-base-content/70 text-sm">(Legacy)</span>
                    </div>
                    <div className="mt-4">
                        <a href="#demo-modal-anchor" className="btn">
                            Open
                        </a>

                        <div className="modal" role="dialog" id="demo-modal-anchor">
                            <div className="modal-box">
                                <h3 className="text-lg font-medium">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    <a href="#" className="btn">
                                        Close
                                    </a>
                                </div>
                            </div>
                            <a href="#" className="modal-backdrop modal-action" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="card-body">
                    <div className="card-title">Custom width</div>
                    <div className="mt-4">
                        <button
                            className="btn"
                            onClick={() => document.querySelector<HTMLDialogElement>("#demo-modal-5")?.showModal()}>
                            Open
                        </button>
                        <dialog id="demo-modal-5" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="text-lg font-medium">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalExample;
