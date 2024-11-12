import { FormConfig } from "../assets/formConfigs";

interface FormDataValues {
    [key: string]: string;
}

interface SubmittedFormProps {
    formConfig: FormConfig;
    forms: FormDataValues[];
}

function FormDataTable({ forms }: SubmittedFormProps) {

    function formatFieldName(fieldName: string): string {
        // Convert camelCase or snake_case to space-separated words
        const formatted = fieldName
            .replace(/([a-z])([A-Z])/g, '$1 $2') // Adds space between camelCase words
            .replace(/([a-z])([0-9])/g, '$1 $2') // Adds space between letters and numbers (if any)
            .replace(/[_]/g, ' ') // Replace underscores (snake_case)
            .toUpperCase(); // Capitalize all the letters
        return formatted;
    }

    return (
        <div style={{ minHeight: "70vh" }}>
            {forms?.length <= 0 ? (
                <h3 style={{ textAlign: "center" }}>No forms available.</h3>
            ) : (
                <div className="table-container">
                    <table className="form-table">
                        <thead>
                            <tr>
                                <th>Sl No.</th>
                                {/* Dynamically generate column headers based on the first form's keys */}
                                {forms[0] && Object.keys(forms[0]).map((key) => (
                                    <th style={{textAlign:"center"}} key={key}>{formatFieldName(key)}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {forms.map((form, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    {/* Dynamically render form values based on the keys */}
                                    {Object.keys(form).map((key) => (
                                        <td key={key}>{form[key]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default FormDataTable;
