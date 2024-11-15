import { useState } from "react";
import { Link } from "react-router-dom";
import { formsConfigDataSample } from "../assets/formConfigs";

function FormList() {
    const [formList, setFormList] = useState(formsConfigDataSample);

    return (
        <>
            <div style={{ marginLeft: '4rem', marginRight: '4rem', maxWidth: "90vw" }}>
                <h1>Forms List</h1>
            </div>

            <div style={{ height: '80vh', overflow: 'scroll' }}>
                <div style={{ marginLeft: '20px', marginRight: '20px', }}>
                    <Link to={"/createForms"}>
                        <button style={{ width: '130px' }}><b>+ New Form</b></button>
                    </Link>
                </div>

                <div className="table-container">
                    <table className="form-table">
                        <thead>
                            <tr>
                                <th>Sl No.</th>
                                <th>Form Title</th>
                                <th>Version</th>
                                <th>Effective Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {formList?.map((form, index) => (
                                <tr key={index}>
                                    <td className="text-right">{index + 1}</td>
                                    <td>
                                        <Link to={`/form?id=${form?.id}`}>{form?.title}</Link>
                                    </td>
                                    <td className="text-right">{form?.version}</td>
                                    <td className="text-center">{form?.createdDate}</td>
                                    <td style={{ display: 'flex', gap: '13px' }}>
                                        <div title="Edit" style={{ cursor: 'pointer' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                                        </div>

                                        <div title="Delete" style={{ cursor: 'pointer' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#d11a2a"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Link to="/" className="homeLink"> 🔙 Home Page </Link>
        </>
    )
}

export default FormList