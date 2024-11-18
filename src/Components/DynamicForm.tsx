import React, { useEffect, useState } from 'react';
import { formatFieldName, FormConfig, FormDataValues, FormField } from '../assets/formConfigs';

interface DynamicFormProps {
    formConfig: FormConfig;
    SubmittedFormData?: FormDataValues;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ formConfig, SubmittedFormData = null }) => {
    const [formData, setFormData] = useState<FormDataValues>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleGridChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string, rowIndex: number, columnName: string) => {
        const { value } = e.target;
        setFormData((prevData: { [x: string]: any; }) => {
            const newGridData = [...(prevData[fieldName] || [])];
            newGridData[rowIndex] = {
                ...(newGridData[rowIndex] || {}),
                [columnName]: value,
            };
            return {
                ...prevData,
                [fieldName]: newGridData,
            };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', {
            formId: formConfig?.id,
            formData,
            version: "1.1.0",
            submitDate: new Date(),
            submitBy: "user"
        });
        alert('Data submitted successfully');
        setFormData({}); //Reset the form
    };

    useEffect(() => {
        //if filled data available, its preview mode
        if (SubmittedFormData) {
            setFormData(SubmittedFormData);
        }
    }, [SubmittedFormData]);



    return (
        <form onSubmit={handleSubmit}>
            <h2>{formConfig?.title}</h2>
            <hr style={{ margin: 3 }} />
            <br />
            {formConfig?.fields?.map((field: FormField, index: number) => (
                <div key={index}>
                    <label>{field?.label}:</label>
                    {field?.type === "select" ? (
                        <select name={field.name} onChange={handleChange} required={field?.required} value={formData[field.name] || ''}>
                            <option value="">Select</option>
                            {field?.options?.map((option: any, index: React.Key) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    ) : field?.type === "grid" ? (
                        <div>
                            <div className="table-container" style={{ padding: 0 }}>
                                <table className="form-table">
                                    <thead>
                                        <tr>
                                            {/* Dynamically generate column headers based on the gridFields */}
                                            {field?.gridFields?.map((subField, columnIndex) => (
                                                <th style={{ textAlign: "center", backgroundColor: 'lightgrey', color: '#333' }} key={columnIndex}>
                                                    {formatFieldName(subField.label)} {/* Assuming you want the label as column header */}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Create rows based on the gridLength */}
                                        {new Array(Number(field?.gridLength) || 0).fill(null).map((_, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {field?.gridFields?.map((subField: FormField, columnIndex) => (
                                                    <td key={columnIndex}>
                                                        <input
                                                            name={`${field.name}[${rowIndex}][${subField.name}]`} // Ensure a unique name for each input
                                                            type={subField.type}
                                                            value={formData[field.name]?.[rowIndex]?.[subField.name] || ''}
                                                            onChange={(e) =>
                                                                handleGridChange(e, field.name, rowIndex, subField.name)
                                                            }
                                                            placeholder={subField?.placeholder || ''}
                                                            required={subField.required}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    ) : (
                        <input
                            name={field?.name}
                            type={field?.type}
                            onChange={handleChange}
                            placeholder={field?.placeholder || ''}
                            required={field?.required}
                            value={formData[field?.name] || ''}
                        />
                    )}
                </div>
            ))}
            {!SubmittedFormData && <button type="submit">Submit</button>}
        </form>
    );
};

export default DynamicForm;
