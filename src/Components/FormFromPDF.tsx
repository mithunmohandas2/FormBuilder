import { useState } from "react";
import Modal from 'react-modal';
import DynamicForm from "./DynamicForm";
import { FormConfig } from "../assets/formConfigs";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { generateFormData } from "../services/interactionsAPI";

function FormFromPDF() {
    const [modalIsOpen, setIsModalOpen] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [formData, setFormData] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [formPreviewData, setFormPreviewData] = useState<FormConfig | null>(null);

    function closeModal() {
        setIsModalOpen(false);
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!file) return toast.error("Please upload a PDF to continue");
        if (prompt?.length < 3) return toast.error('Please provide a prompt to continue');

        const APIData = {
            file,
            prompt,
        }
        console.log(APIData);  //test

        try {
            const response = await generateFormData({ file, prompt });
            setFormData(response.data); // Assuming the response has a `data` field
            toast.success("Form data generated");
        } catch (error) {
            toast.error("Failed to generate form data");
            console.error(error);
        }
    };

    function previewForm() {
        try {
            if (formData?.length < 2) return toast.error("Invalid form data");
            const parsedFormData = JSON.parse(formData)

            setFormPreviewData({
                id: "001",
                createdDate: new Date().toISOString().split('T')[0],
                title: 'Form Preview',
                version: "1.0",
                fields: parsedFormData
            });
            setIsModalOpen(true);
        } catch (error) {
            console.error("Invalid JSON input:", error);
            console.log("The Sample Format for Form Creation is :" + ` [{ "label": "First Name", "name": "firstName", "type": "text", "required": true }, { "label": "Last Name", "name": "lastName", "type": "text" }]`)
            toast.error("Error : Please correct the form data format");
        }

    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile) {
            const maxSizeMB = 2.5; // File size limit in MB
            const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes

            if (selectedFile.type !== "application/pdf") {
                toast.error("Only PDF files are allowed");
                setFile(null);
                return;
            }

            if (selectedFile.size > maxSizeBytes) {
                toast.error(`File size must be less than ${maxSizeMB} MB`);
                setFile(null);
                return;
            }
            setFile(selectedFile);
        } else {
            setFile(null);
        }
    };


    return (
        <>
            <h1>Form from PDF</h1>

            <div style={{ display: "flex", gap:1 }}>
                <form style={{ width: '35vw' }} onSubmit={handleSubmit}>
                    <label htmlFor="file">Upload the PDF</label>
                    <input type="file" name="file" onChange={handleFileChange} accept="application/pdf" />
                    <label htmlFor="prompt">Prompt</label>
                    <textarea name="prompt" style={{ minHeight: 100 }} value={prompt} id="prompt" onChange={(e) => setPrompt(e.target.value)}></textarea>
                    <button type="submit">Generate</button>
                </form>

                <div className="formStyle" style={{ width: '60vw' }}>
                    <label htmlFor="formData">Form Data</label>
                    <textarea style={{ minHeight: 200 }} name="formData" value={formData} onChange={(e) => setFormData(e.target.value)}></textarea>
                    <button type="button" onClick={previewForm}>Preview Form</button>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Form Preview"
                ariaHideApp={false}>

                <div style={{ display: 'flex', justifyContent: 'end', marginRight: '10px' }}>
                    <b style={{ cursor: 'pointer' }} onClick={closeModal}>X</b>
                </div>

                <div style={{ overflowY: 'scroll', display: 'flex', justifyContent: 'center' }}>
                    {formPreviewData ? (
                        <DynamicForm formConfig={formPreviewData} PreviewMode={true} />
                    ) : (
                        <p>No form data available</p>
                    )}
                </div>
            </Modal>

            <Toaster />
            <Link to="/" className="homeLink"> 🔙 Home Page </Link>
        </>
    )
}

export default FormFromPDF