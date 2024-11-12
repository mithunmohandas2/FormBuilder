// formConfigs.ts
export interface FormField {
    label: string;
    name: string;
    type: "text" | "tel" | "date" | "select";
    required?: boolean;
    options?: string[];  // Only applicable for "select" fields
}

export interface FormConfig {
    title: string;
    fields: FormField[];
}

export const formsConfigDataSample : FormConfig[]  = [
    {
        title: "Employee Personal Information Form",
        fields: [
            { label: "Full Name", name: "fullName", type: "text", required: true },
            { label: "Preferred Name", name: "preferredName", type: "text" },
            { label: "Primary Address", name: "primaryAddress", type: "text", required: true },
            { label: "City", name: "city", type: "text", required: true },
            { label: "State", name: "state", type: "text", required: true },
            { label: "County", name: "county", type: "text" },
            { label: "Zip Code", name: "zipCode", type: "text", required: true },
            { label: "Gender", name: "gender", type: "select", options: ["Male", "Female"] },
            { label: "Birth Date", name: "birthDate", type: "date" },
        ],
    },
    {
        title: "Emergency Contact Information",
        fields: [
            { label: "Name", name: "name", type: "text", required: true },
            { label: "Relationship", name: "relationship", type: "text" },
            { label: "Cell Phone", name: "cellPhone", type: "tel" },
            { label: "Home Phone", name: "homePhone", type: "tel" },
            { label: "Work Phone", name: "workPhone", type: "tel" },
        ],
    },
];
