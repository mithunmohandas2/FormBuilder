import React, { useState } from 'react';
import DynamicForm from './DynamicForm';
import { formsConfigDataSample } from '../assets/formConfigs';
import { Link } from 'react-router-dom';

const RenderForm: React.FC = () => {
    const [currentForm, setCurrentForm] = useState<string>("0");
    const [formsConfigData, setFormsConfigData] = useState(formsConfigDataSample);

    const handleFormSubmit = (formData: Record<string, any>) => {
        console.log('Form Submitted:', formData);
        alert('Data submitted successfully');
    };

    return (
        <div>
            <div style={{  marginLeft: '4rem',  marginRight: '4rem'}}>
                <h1>Dynamic Forms Selector</h1>
                <select
                    onChange={(e) => setCurrentForm(e.target.value)}
                    value={currentForm}>
                    {formsConfigDataSample?.map((form, index) => (
                        <option key={index} value={`${index}`}>{form.title}</option>
                    ))}
                </select>
            </div>

            <DynamicForm
                formConfig={formsConfigData[parseInt(currentForm)]}
                onSubmit={handleFormSubmit}
            />

            <Link to="/" className="homeLink"> 🔙 Home Page </Link>
        </div>
    );
};

export default RenderForm;
