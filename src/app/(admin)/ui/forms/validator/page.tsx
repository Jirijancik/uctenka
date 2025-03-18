import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Validator - Forms",
};

const FormValidatorPage = () => {
    return (
        <>
            <PageTitle title="Validator" items={[{ label: "Forms" }, { label: "Validator", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Email</div>
                        <div className="mt-4">
                            <label className="input validator">
                                <span className="iconify lucide--mail text-base-content/60 size-5" />
                                <input className="" type="email" required placeholder="mail@site.com" />
                            </label>
                            <div className="validator-hint">Enter valid email address</div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Phone Number</div>
                        <div className="mt-4">
                            <label className="input validator">
                                <span className="iconify lucide--smartphone text-base-content/60 size-5" />
                                <input
                                    type="tel"
                                    className="tabular-nums"
                                    required
                                    placeholder="Phone"
                                    pattern="[0-9]*"
                                    minLength={10}
                                    maxLength={10}
                                    title="Must be 10 digits"
                                />
                            </label>
                            <p className="validator-hint">Must be 10 digits</p>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Date Validator</div>
                        <div className="mt-4">
                            <label className="input validator">
                                <span className="iconify lucide--calendar text-base-content/60 size-5" />
                                <input
                                    type="date"
                                    required
                                    placeholder="Pick a date in 2025"
                                    min="2025-01-01"
                                    max="2025-12-31"
                                    title="Must be valid date"
                                />
                            </label>
                            <p className="validator-hint">Must be 2025</p>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Time Validator</div>
                        <div className="mt-4">
                            <label className="input validator">
                                <span className="iconify lucide--clock text-base-content/60 size-5" />
                                <input type="time" min="09:00" max="18:00" aria-label="Input" />
                            </label>
                            <p className="validator-hint">Use only office time (9 AM to 6 PM)</p>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Username</div>
                        <div className="mt-4">
                            <label className="input validator">
                                <span className="iconify lucide--user text-base-content/60 size-5" />
                                <input
                                    type="text"
                                    required
                                    placeholder="Username"
                                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                                    minLength={3}
                                    maxLength={30}
                                    title="Only letters, numbers or dash"
                                />
                            </label>
                            <p className="validator-hint">
                                Must be 3 to 30 characters
                                <br />
                                containing only letters, numbers or dash
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">URL</div>
                        <div className="mt-4">
                            <label className="input validator">
                                <span className="iconify lucide--link text-base-content/60 size-4" />
                                <input
                                    type="url"
                                    required
                                    placeholder="https://"
                                    defaultValue="https://"
                                    pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                    title="Must be valid URL"
                                />
                            </label>
                            <p className="validator-hint">Must be valid URL</p>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Checkbox</div>
                        <div className="mt-4">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary validator"
                                required
                                title="Required"
                            />
                            <p className="validator-hint">Required</p>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Toggle</div>
                        <div className="mt-4">
                            <input
                                type="checkbox"
                                className="toggle toggle-primary validator"
                                required
                                title="Required"
                            />
                            <p className="validator-hint">Required</p>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Password</div>
                        <div className="mt-4">
                            <label className="input validator">
                                <span className="iconify lucide--key-round text-base-content/60 size-5" />
                                <input
                                    type="password"
                                    required
                                    minLength={8}
                                    pattern="(?=.*d)(?=.*[a-z])(?=.*[A-Z]).&#123;8,}"
                                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                />
                            </label>
                            <p className="validator-hint">
                                Must be more than 8 characters, including
                                <br />
                                At least one number
                                <br />
                                At least one lowercase letter
                                <br />
                                At least one uppercase letter
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Form select</div>
                        <div className="mt-4">
                            <form>
                                <select className="select validator w-64" required defaultValue="" aria-label="Select">
                                    <option disabled value="">
                                        Choose:
                                    </option>
                                    <option>Tabs</option>
                                    <option>Spaces</option>
                                </select>
                                <p className="validator-hint">Required</p>
                                <div className="mt-1 flex gap-3">
                                    <button className="btn" type="reset">
                                        Clear
                                    </button>
                                    <button className="btn btn-primary" type="submit">
                                        Submit form
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormValidatorPage;
