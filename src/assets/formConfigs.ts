export interface FormField {
    label: string;
    name: string;
    type: "text" | "number" | "tel" | "date" | "month" | "week" | "time" | "select" | "grid" | "password" | "email" | "url";
    placeholder?: string;
    required?: boolean;
    options?: string[];  // Only applicable for "select" fields
    nestedFields?: FormField[]; // Only applicable for "grid" fields
    gridLength?: string; // Only applicable for "grid" fields
}

export interface FormConfig {
    id?: string;
    createdDate?: string;
    title: string;
    version?: string;
    fields: FormField[];
}

export function formatFieldName(fieldName: string): string {
    const formatted = fieldName
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Adds space between camelCase words
        .replace(/([a-z])([0-9])/g, '$1 $2') // Adds space between letters and numbers (if any)
        .replace(/[_]/g, ' ') // Replace underscores (snake_case)
        .toLowerCase(); // Convert all characters to lowercase

    // Capitalize the first letter of each word
    return formatted.replace(/\b\w/g, (char) => char.toUpperCase());
}


export interface SubmittedDataList {
    formId: string,
    version: string,
    submitDate: string,
    submitBy: string,
    formData: FormDataValues
}

export interface FormDataValues {
    [key: string]: string | any;
}

export interface SubmittedFormProps {
    formConfig: FormConfig[] | null;
    SubmittedDataList: SubmittedDataList[];
}

export const formsConfigDataSample: FormConfig[] = [
    {
        "id": "10001",
        "version": "1.0.0",
        "createdDate": "10-10-2024",
        "title": "Employee Personal Information Form",
        "fields": [
            { "label": "Full Name", "name": "fullName", "type": "text", "required": true },
            { "label": "Preferred Name", "name": "preferredName", "type": "text" },
            { "label": "Primary Address", "name": "primaryAddress", "type": "text", "required": true },
            { "label": "City", "name": "city", "type": "text", "required": true },
            { "label": "State", "name": "state", "type": "text", "required": true },
            { "label": "County", "name": "county", "type": "text" },
            { "label": "Zip Code", "name": "zipCode", "type": "text", "required": true },
            { "label": "Gender", "name": "gender", "type": "select", "options": ["Male", "Female"] },
            { "label": "Birth Date", "name": "birthDate", "type": "date" },
        ],
    },
    {
        "id": "10002",
        "version": "1.0.1",
        "createdDate": "11-10-2024",
        "title": "Emergency Contact Information",
        "fields": [
            { "label": "Name", "name": "name", "type": "text", "required": true },
            { "label": "Relationship", "name": "relationship", "type": "text" },
            { "label": "Cell Phone", "name": "cellPhone", "type": "tel" },
            { "label": "Home Phone", "name": "homePhone", "type": "tel" },
            { "label": "Work Phone", "name": "workPhone", "type": "tel" },
        ],
    },
    {
        "id": "10003",
        "version": "1.0.0",
        "createdDate": "12-10-2024",
        "title": "Sample Form 1",
        "fields": [
            {
                "label": "Full Name",
                "name": "employeeFullName",
                "type": "text",
                "required": true
            },
            {
                "label": "Preferred Name",
                "name": "preferredName",
                "type": "text"
            },
            {
                "label": "Primary Address",
                "name": "primaryAddress",
                "type": "text",
                "required": true
            },
            {
                "label": "City (Primary Address)",
                "name": "primaryCity",
                "type": "text",
                "required": true
            },
            {
                "label": "State (Primary Address)",
                "name": "primaryState",
                "type": "text",
                "required": true
            },
            {
                "label": "County (Primary Address)",
                "name": "primaryCounty",
                "type": "text"
            },
            {
                "label": "Zip Code (Primary Address)",
                "name": "primaryZipCode",
                "type": "text",
                "required": true
            },
            {
                "label": "Supplemental Address",
                "name": "supplementalAddress",
                "type": "text"
            },
            {
                "label": "City (Supplemental Address)",
                "name": "supplementalCity",
                "type": "text"
            },
            {
                "label": "State (Supplemental Address)",
                "name": "supplementalState",
                "type": "text"
            },
            {
                "label": "County (Supplemental Address)",
                "name": "supplementalCounty",
                "type": "text"
            },
            {
                "label": "Zip Code (Supplemental Address)",
                "name": "supplementalZipCode",
                "type": "text"
            },
            {
                "label": "Gender",
                "name": "gender",
                "type": "select",
                "options": [
                    "Male",
                    "Female"
                ],
                "required": true
            },
            {
                "label": "Birth Date",
                "name": "birthDate",
                "type": "date",
                "required": true
            },
            {
                "label": "Marital Status",
                "name": "maritalStatus",
                "type": "select",
                "options": [
                    "Single",
                    "Married"
                ],
                "required": true
            },
            {
                "label": "Home Telephone Number",
                "name": "homeTelephoneNumber",
                "type": "tel"
            },
            {
                "label": "Cell Telephone Number",
                "name": "cellTelephoneNumber",
                "type": "tel"
            },
            {
                "label": "Emergency Contact Name",
                "name": "emergencyContactName",
                "type": "text",
                "required": true
            },
            {
                "label": "Emergency Contact Address",
                "name": "emergencyContactAddress",
                "type": "text"
            },
            {
                "label": "Emergency Contact City",
                "name": "emergencyContactCity",
                "type": "text"
            },
            {
                "label": "Emergency Contact State/Province",
                "name": "emergencyContactStateProvince",
                "type": "text"
            },
            {
                "label": "Emergency Contact Postal Code",
                "name": "emergencyContactPostalCode",
                "type": "text"
            },
            {
                "label": "Emergency Contact Country",
                "name": "emergencyContactCountry",
                "type": "text"
            },
            {
                "label": "Emergency Contact Relationship",
                "name": "emergencyContactRelationship",
                "type": "text"
            },
            {
                "label": "Emergency Contact Cell Telephone",
                "name": "emergencyContactCellTelephone",
                "type": "tel"
            },
            {
                "label": "Emergency Contact Home Telephone",
                "name": "emergencyContactHomeTelephone",
                "type": "tel"
            },
            {
                "label": "Emergency Contact Work Telephone",
                "name": "emergencyContactWorkTelephone",
                "type": "tel"
            },
            {
                "label": "Professional Experience",
                "name": "professionalExperience",
                "type": "grid",
                "required": true,
                "gridLength": "3",
                "nestedFields": [
                    {
                        "label": "Company Name",
                        "name": "companyName",
                        "type": "text",
                        "required": true
                    },
                    {
                        "label": "Designation",
                        "name": "designation",
                        "type": "text",
                        "required": true
                    },
                    {
                        "label": "From",
                        "name": "fromDate",
                        "type": "date",
                        "required": true
                    },
                    {
                        "label": "To",
                        "name": "toDate",
                        "type": "date",
                        "required": true
                    }
                ]
            },
            {
                "label": "Employee Signature",
                "name": "employeeSignature",
                "type": "text",
                "required": true
            },
            {
                "label": "Date",
                "name": "date",
                "type": "date",
                "required": true
            },
            {
                "label": "Employee Identification Number (EIN)",
                "name": "employeeIdentificationNumber",
                "type": "text"
            }
        ]
    }
];

export const submittedFormsListSample = [
    {
        "formId": "10001",
        "version": "1.1.0",
        "submitDate": "2024-11-16T00:00:00.000Z",
        "submitBy": "Form 1 user",
        "formData": {
            "fullName": "Flavia Warner",
            "preferredName": "Tucker Forbes",
            "primaryAddress": "Quam et vitae conseq",
            "city": "Nesciunt dolorem ex",
            "state": "Qui sit non veniam",
            "county": "Quas culpa corporis",
            "zipCode": "72975",
            "birthDate": "1994-02-05"
        }
    },
    {
        "formId": "10002",
        "version": "1.1.0",
        "submitDate": "2024-11-16T00:00:00.000Z",
        "submitBy": "Form 2 user",
        "formData": {
            "name": "Flavia",
            "relationship": "cousin",
            "homePhone": "7292275",
            "workPhone": "712975",
            "cellPhone": "7211975",
        }
    },
    {
        "formId": "10003",
        "version": "1.1.0",
        "submitDate": "2024-11-16T00:00:00.000Z",
        "submitBy": "Sample form 1 user",
        "formData": {
            "employeeFullName": "Lee Edwards",
            "preferredName": "Ursa Burnett",
            "primaryAddress": "Quasi dignissimos au",
            "primaryCity": "Molestiae aut volupt",
            "primaryState": "Aut nulla inventore",
            "primaryCounty": "Voluptates reprehend",
            "primaryZipCode": "86644",
            "supplementalAddress": "Sunt odit id et ani",
            "supplementalCity": "A eum commodi non ac",
            "supplementalState": "Enim saepe incidunt",
            "supplementalCounty": "Aspernatur ex aut ni",
            "supplementalZipCode": "79545",
            "birthDate": "2005-11-28",
            "Phone": "+1 (217) 561-6376",
            "Mobile": "+1 (974) 599-7828",
            "professionalExperience": [
                {
                    "companyName": "Perez Bennett Co",
                    "designation": "Sit quaerat vitae ve",
                    "fromDate": "1999-09-11",
                    "toDate": "2011-07-05"
                },
                {
                    "companyName": "Castillo Patrick Traders",
                    "designation": "Modi amet quas volu",
                    "fromDate": "1970-08-26",
                    "toDate": "1980-11-06"
                },
                {
                    "companyName": "Kerr Keller Trading",
                    "designation": "Autem est nulla eni",
                    "fromDate": "2016-08-27",
                    "toDate": "2024-07-20"
                }
            ],
            "employeeSignature": "Reprehenderit recusa",
            "date": "2013-04-08",
            "employeeIdentificationNumber": "687",
            "gender": "Male",
            "maritalStatus": "Single"
        }
    }
]