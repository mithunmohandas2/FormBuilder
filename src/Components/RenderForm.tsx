import React, { useState } from 'react';
import DynamicForm from './DynamicForm';
import { formsConfigDataSample } from '../assets/formConfigs';
import { Link } from 'react-router-dom';

const RenderForm: React.FC = () => {
    const [currentForm, setCurrentForm] = useState<string>("0");
    const [formsConfigData, setFormsConfigData] = useState(formsConfigDataSample);

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

            <DynamicForm formConfig={formsConfigData[parseInt(currentForm)]} />

            <Link to="/" className="homeLink"> 🔙 Home Page </Link>
        </div>
    );
};

export default RenderForm;
