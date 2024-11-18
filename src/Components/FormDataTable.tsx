import { FormDataValues, SubmittedFormProps } from "../assets/formConfigs";
import { useState } from "react";
import Modal from 'react-modal';
import DynamicForm from "./DynamicForm";

// Set the app element for accessibility
Modal.setAppElement('#root');

function FormDataTable({ formConfig, SubmittedDataList }: SubmittedFormProps) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [displayForm, setDisplayForm] = useState<null | FormDataValues>(null);

    function closeModal() {
        setIsOpen(false);
        setDisplayForm(null);
    }

    function updateDisplayForm(form: FormDataValues): void {
        setDisplayForm(form);
        setIsOpen(true);
    }

    return (
        <>
            <div style={{ height: '80vh', overflow: 'scroll' }}>
                {SubmittedDataList?.length ? <div className="table-container">
                    <table className="form-table">
                        <thead>
                            <tr>
                                <th>Sl No.</th>
                                <th>User Name</th>
                                <th>Version</th>
                                <th>Submission Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {SubmittedDataList?.map((form, index) => (
                                <tr key={index}>
                                    <td className="text-right">{index + 1}</td>
                                    <td>
                                        <b style={{ cursor: "pointer" }} onClick={() => updateDisplayForm(form)}>{form?.submitBy}</b>
                                    </td>
                                    <td className="text-right">{form?.version}</td>
                                    <td className="text-center">{form?.submitDate}</td>
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
                </div> : null}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Submitted Form">

                <div style={{ display: 'flex', justifyContent: 'end', marginRight: '10px' }}>
                    <b style={{ cursor: 'pointer' }} onClick={closeModal}>X</b>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <p>Form ID : {displayForm?.formId}</p>
                    <p>Version : {displayForm?.version}</p>
                    <p>Date : {displayForm?.submitDate}</p>
                </div>
                <div style={{ overflowY: 'scroll', display: 'flex', justifyContent: 'center' }}>
                    <DynamicForm formConfig={formConfig![0]} SubmittedFormData={displayForm?.formData} />
                </div>
            </Modal>
        </>
    );
}

export default FormDataTable;
