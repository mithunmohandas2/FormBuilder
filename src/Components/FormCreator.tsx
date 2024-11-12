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
        
        console.log({
            title: formTitle,
            fields: formContent, 
        });
        
        setSubmitted(true);
        setFormTitle("");
        setFormContent("");
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
