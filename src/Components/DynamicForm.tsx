import React, { useState } from 'react';
import { FormConfig, FormField } from '../assets/formConfigs';

interface DynamicFormProps {
    formConfig: FormConfig;
    onSubmit: (formData: any) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ formConfig, onSubmit }) => {
    const [formData, setFormData] = useState<any>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData); // Pass formData to onSubmit handler
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{formConfig.title}</h2>
            <hr style={{ margin: 3 }} />
            <br />
            {formConfig.fields.map((field: FormField, index: number) => (
                <div key={index}>
                    <label>{field.label}:</label>
                    {field.type === "select" ? (
                        <select name={field.name} onChange={handleChange} required={field.required}>
                            <option value="">Select</option>
                            {field.options?.map((option: any, index: React.Key) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            name={field.name}
                            type={field.type}
                            onChange={handleChange}
                            required={field.required}
                        />
                    )}
                </div>
            ))}
            <button type="submit">Submit</button>

        </form>
    );
};

export default DynamicForm;
