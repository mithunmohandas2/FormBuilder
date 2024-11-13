import { useState } from "react";
import { Link } from "react-router-dom";

function FormCreator() {
    const [formContent, setFormContent] = useState("");
    const [formTitle, setFormTitle] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!formTitle || !formContent) {
            alert("Please fill in both the form title and the form content.");
            return;
        }
    
        try {
            // Try parsing the formContent as JSON
            const inputData = JSON.parse(formContent);
    
            // Log or process the input data
            console.log({
                title: formTitle,
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
                <hr />
                <br />

                <label>Form Title</label>
                <input 
                    type="text" 
                    value={formTitle} 
                    onChange={(e) => setFormTitle(e.target.value)} 
                />
                <br />
                
                <label htmlFor="FormContentArea">Enter the form field data</label>
                <textarea 
                    style={{ minHeight: "40vh" }} 
                    value={formContent} 
                    onChange={(e) => setFormContent(e.target.value)} 
                />
                <button type="submit">Submit</button>
                {submitted && <p style={{ color: "green" }}>Form submitted successfully!</p>}
            </form>
            <Link to="/" className="homeLink"> 🔙 Home Page </Link>
        </>
    );
}

export default FormCreator;
