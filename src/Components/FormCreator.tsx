import { useState } from "react";
import { Link } from "react-router-dom";

function FormCreator() {
    const [formContent, setFormContent] = useState("");
    const [formTitle, setFormTitle] = useState("");
    const [formVersion, setFormVersion] = useState("1.0.0");
    const [createdDate, setCreatedDate] = useState("1.0.0");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formTitle || !formContent) {
            alert("Please fill in both the form title and the form content.");
            return;
        }

        try {
            const inputData = JSON.parse(formContent);

            console.log({
                title: formTitle,
                version:formVersion,
                createdDate,
                fields: inputData,  // This is the array of form fields
            });

            // Example of processing the array (e.g., extracting labels)
            const fieldLabels = inputData.map((field: { label: any; }) => field.label);
            console.log("Field labels:", fieldLabels);

            // Reset the form and set the submission state
            setSubmitted(true);
            setFormTitle("");
            setFormContent("");
        } catch (error) {
            // In case of invalid JSON input, show an alert
            console.error("Invalid JSON input:", error);
            console.log("The Sample Format for Form Creation is :" + ` [{ "label": "First Name", "name": "firstName", "type": "text", "required": true }, { "label": "Last Name", "name": "lastName", "type": "text" }]`)
            alert("There was an error parsing the form content. Please make sure it is valid format.");
        }
    };


    return (
        <>
            <form style={{ width: "70vw", maxWidth: "70vw" }} onSubmit={handleSubmit}>
                <h1>Form Creator</h1>

                <label>Form Title</label>
                <input type="text" value={formTitle} onChange={(e) => setFormTitle(e.target.value)} required />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '48%' }}>
                        <label>Version</label>
                        <input type="text" value={formVersion} onChange={(e) => setFormVersion(e.target.value)} />
                    </div>
                    <div style={{ width: '48%' }}>
                        <label>Effective Date</label>
                        <input type="date" value={createdDate} onChange={(e) => setCreatedDate(e.target.value)} required />
                    </div>
                </div>

                <label htmlFor="FormContentArea">Enter the form field data</label>
                <textarea style={{ minHeight: "30vh" }} value={formContent} onChange={(e) => setFormContent(e.target.value)} />
                <button type="submit">Submit</button>
                {submitted && <p style={{ color: "green" }}>Form submitted successfully!</p>}
            </form>
            <Link to="/" className="homeLink"> 🔙 Home Page </Link>
        </>
    );
}

export default FormCreator;
