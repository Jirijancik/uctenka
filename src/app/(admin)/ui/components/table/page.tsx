import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Table",
};

const TablePage = () => {
    return (
        <>
            <PageTitle title="Table" items={[{ label: "Components" }, { label: "Table", active: true }]} />
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-3">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th />
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Active Row</div>
                        <div className="mt-3">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th />
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="bg-base-200">
                                        <td>1</td>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Highlight on Hover</div>
                        <div className="mt-3">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th />
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="hover:bg-base-200">
                                        <td>1</td>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>

                                    <tr className="hover:bg-base-200">
                                        <td>2</td>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                    </tr>

                                    <tr className="hover:bg-base-200">
                                        <td>3</td>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Zebra</div>
                        <div className="mt-3">
                            <table className="table-zebra table">
                                <thead>
                                    <tr>
                                        <th />
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100 h-fit">
                    <div className="card-body">
                        <div className="card-title">Data Display</div>
                        <div className="mt-3 overflow-auto *:text-nowrap">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>
                                            <input
                                                type="checkbox"
                                                aria-label="Check"
                                                className="checkbox checkbox-sm"
                                            />
                                        </th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <input
                                                type="checkbox"
                                                aria-label="Check"
                                                className="checkbox checkbox-sm"
                                            />
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-3 truncate">
                                                <div className="avatar">
                                                    <div className="bg-primary/25 mask mask-squircle w-10">
                                                        <img src="/images/avatars/1.png" alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-medium">Hart Hagerty</div>
                                                    <div className="text-base-content/80 text-sm">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                Zemlak, Daniel and Leannon
                                                <br />
                                                <div className="badge-ghost badge badge-sm">
                                                    Desktop Support Technician
                                                </div>
                                            </div>
                                        </td>
                                        <td>Purple</td>
                                        <td>
                                            <button className="btn-ghost btn btn-xs">Details</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="checkbox"
                                                aria-label="Check"
                                                className="checkbox checkbox-sm"
                                            />
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-3 truncate">
                                                <div className="avatar">
                                                    <div className="bg-secondary/25 mask mask-squircle w-10">
                                                        <img src="/images/avatars/2.png" alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-medium">Brice Swyre</div>
                                                    <div className="text-base-content/80 text-sm">China</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                Carrol Group <br />
                                                <div className="badge-ghost badge badge-sm">Tax Accountant</div>
                                            </div>
                                        </td>
                                        <td>Red</td>
                                        <td>
                                            <button className="btn-ghost btn btn-xs">Details</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="checkbox"
                                                aria-label="Check"
                                                className="checkbox checkbox-sm"
                                            />
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-3 truncate">
                                                <div className="avatar">
                                                    <div className="bg-success/25 mask mask-squircle w-10">
                                                        <img src="/images/avatars/3.png" alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-medium">Marjy Ferencz</div>
                                                    <div className="text-base-content/80 text-sm">Russia</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                Rowe-Schoen <br />
                                                <div className="badge-ghost badge badge-sm">Office Assistant I</div>
                                            </div>
                                        </td>
                                        <td>Yellow</td>
                                        <td>
                                            <button className="btn-ghost btn btn-xs">Details</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="checkbox"
                                                aria-label="Check"
                                                className="checkbox checkbox-sm"
                                            />
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-3 truncate">
                                                <div className="avatar">
                                                    <div className="bg-error/25 mask mask-squircle w-10">
                                                        <img src="/images/avatars/5.png" alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-medium">Yancy Tear</div>
                                                    <div className="text-base-content/80 text-sm">Brazil</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                Wyman-Ledner <br />
                                                <div className="badge-ghost badge badge-sm">
                                                    Community Outreach Specialist
                                                </div>
                                            </div>
                                        </td>
                                        <td>Indigo</td>
                                        <td>
                                            <button className="btn-ghost btn btn-xs">Details</button>
                                        </td>
                                    </tr>
                                </tbody>

                                <tfoot>
                                    <tr>
                                        <th />
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                        <th>Actions</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Pinned</div>

                        <div className="mt-3 max-h-[400px] overflow-auto">
                            <table className="table-pin-rows table-pin-cols table [&_td]:text-nowrap">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <td>Name</td>
                                        <td>Job</td>
                                        <td>Company</td>
                                        <td>Location</td>
                                        <td>Last Login</td>
                                        <td>Favorite Color</td>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Littel, Schaden and Vandervort</td>
                                        <td>Canada</td>
                                        <td>12/16/2020</td>
                                        <td>Blue</td>
                                        <th>1</th>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Zemlak, Daniel and Leannon</td>
                                        <td>United States</td>
                                        <td>12/5/2020</td>
                                        <td>Purple</td>
                                        <th>2</th>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Carroll Group</td>
                                        <td>China</td>
                                        <td>8/15/2020</td>
                                        <td>Red</td>
                                        <th>3</th>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>Marjy Ferencz</td>
                                        <td>Office Assistant I</td>
                                        <td>Rowe-Schoen</td>
                                        <td>Russia</td>
                                        <td>3/25/2021</td>
                                        <td>Crimson</td>
                                        <th>4</th>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <td>Yancy Tear</td>
                                        <td>Community Outreach Specialist</td>
                                        <td>Wyman-Ledner</td>
                                        <td>Brazil</td>
                                        <td>5/22/2020</td>
                                        <td>Indigo</td>
                                        <th>5</th>
                                    </tr>
                                    <tr>
                                        <th>6</th>
                                        <td>Irma Vasilik</td>
                                        <td>Editor</td>
                                        <td>Wiza, Bins and Emard</td>
                                        <td>Venezuela</td>
                                        <td>12/8/2020</td>
                                        <td>Purple</td>
                                        <th>6</th>
                                    </tr>
                                    <tr>
                                        <th>7</th>
                                        <td>Meghann Durtnal</td>
                                        <td>Staff Accountant IV</td>
                                        <td>Schuster-Schimmel</td>
                                        <td>Philippines</td>
                                        <td>2/17/2021</td>
                                        <td>Yellow</td>
                                        <th>7</th>
                                    </tr>
                                    <tr>
                                        <th>8</th>
                                        <td>Sammy Seston</td>
                                        <td>Accountant I</td>
                                        <td>O&#39;Hara, Welch and Keebler</td>
                                        <td>Indonesia</td>
                                        <td>5/23/2020</td>
                                        <td>Crimson</td>
                                        <th>8</th>
                                    </tr>
                                    <tr>
                                        <th>9</th>
                                        <td>Lesya Tinham</td>
                                        <td>Safety Technician IV</td>
                                        <td>Turner-Kuhlman</td>
                                        <td>Philippines</td>
                                        <td>2/21/2021</td>
                                        <td>Maroon</td>
                                        <th>9</th>
                                    </tr>
                                    <tr>
                                        <th>10</th>
                                        <td>Zaneta Tewkesbury</td>
                                        <td>VP Marketing</td>
                                        <td>Sauer LLC</td>
                                        <td>Chad</td>
                                        <td>6/23/2020</td>
                                        <td>Green</td>
                                        <th>10</th>
                                    </tr>
                                    <tr>
                                        <th>11</th>
                                        <td>Andy Tipple</td>
                                        <td>Librarian</td>
                                        <td>Hilpert Group</td>
                                        <td>Poland</td>
                                        <td>7/9/2020</td>
                                        <td>Indigo</td>
                                        <th>11</th>
                                    </tr>
                                    <tr>
                                        <th>12</th>
                                        <td>Sophi Biles</td>
                                        <td>Recruiting Manager</td>
                                        <td>Gutmann Inc</td>
                                        <td>Indonesia</td>
                                        <td>2/12/2021</td>
                                        <td>Maroon</td>
                                        <th>12</th>
                                    </tr>
                                    <tr>
                                        <th>13</th>
                                        <td>Florida Garces</td>
                                        <td>Web Developer IV</td>
                                        <td>Gaylord, Pacocha and Baumbach</td>
                                        <td>Poland</td>
                                        <td>5/31/2020</td>
                                        <td>Purple</td>
                                        <th>13</th>
                                    </tr>
                                    <tr>
                                        <th>14</th>
                                        <td>Maribeth Popping</td>
                                        <td>Analyst Programmer</td>
                                        <td>Deckow-Pouros</td>
                                        <td>Portugal</td>
                                        <td>4/27/2021</td>
                                        <td>Aquamarine</td>
                                        <th>14</th>
                                    </tr>
                                    <tr>
                                        <th>15</th>
                                        <td>Moritz Dryburgh</td>
                                        <td>Dental Hygienist</td>
                                        <td>Schiller, Cole and Hackett</td>
                                        <td>Sri Lanka</td>
                                        <td>8/8/2020</td>
                                        <td>Crimson</td>
                                        <th>15</th>
                                    </tr>
                                    <tr>
                                        <th>16</th>
                                        <td>Reid Semiras</td>
                                        <td>Teacher</td>
                                        <td>Sporer, Sipes and Rogahn</td>
                                        <td>Poland</td>
                                        <td>7/30/2020</td>
                                        <td>Green</td>
                                        <th>16</th>
                                    </tr>
                                    <tr>
                                        <th>17</th>
                                        <td>Alec Lethby</td>
                                        <td>Teacher</td>
                                        <td>Reichel, Glover and Hamill</td>
                                        <td>China</td>
                                        <td>2/28/2021</td>
                                        <td>Khaki</td>
                                        <th>17</th>
                                    </tr>
                                    <tr>
                                        <th>18</th>
                                        <td>Aland Wilber</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Kshlerin, Rogahn and Swaniawski</td>
                                        <td>Czech Republic</td>
                                        <td>9/29/2020</td>
                                        <td>Purple</td>
                                        <th>18</th>
                                    </tr>
                                    <tr>
                                        <th>19</th>
                                        <td>Teddie Duerden</td>
                                        <td>Staff Accountant III</td>
                                        <td>Pouros, Ullrich and Windler</td>
                                        <td>France</td>
                                        <td>10/27/2020</td>
                                        <td>Aquamarine</td>
                                        <th>19</th>
                                    </tr>
                                    <tr>
                                        <th>20</th>
                                        <td>Lorelei Blackstone</td>
                                        <td>Data Coordinator</td>
                                        <td>Witting, Kutch and Greenfelder</td>
                                        <td>Kazakhstan</td>
                                        <td>6/3/2020</td>
                                        <td>Red</td>
                                        <th>20</th>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <td>Name</td>
                                        <td>Job</td>
                                        <td>Company</td>
                                        <td>Location</td>
                                        <td>Last Login</td>
                                        <td>Favorite Color</td>
                                        <th></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TablePage;
