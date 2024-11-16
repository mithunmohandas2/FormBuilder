import { useEffect, useState } from "react";
import { formsConfigDataSample, SubmittedDataList } from "../assets/formConfigs";
import { Link } from "react-router-dom";
import FormDataTable from "./FormDataTable";

function SubmittedForms() {
    const [currentForm, setCurrentForm] = useState<string>("0");
    const [displayForm, setDisplayForm] = useState<null | SubmittedDataList[]>(null);
    const [formsConfigData,] = useState(formsConfigDataSample);
    //setFormsConfigData,  setFilledFormData
    const [filledFormData,] = useState<SubmittedDataList[]>([
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
                "fullName": "Flavia",
                "preferredName": "Tuckerbes",
                "primaryAddress": "Qu vitae conseq",
                "city": "Nesciunt dolorem ex",
                "state": "Qui sit non veniam",
                "county": "Quas culpa corporis",
                "zipCode": "72975",
                "birthDate": "1994-02-05"
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
    ]);

    useEffect(() => {
        const list = filledFormData.filter((form) => form.formId === currentForm);
        setDisplayForm(list)
    }, [currentForm])


    return (
        <>
            <div style={{ marginLeft: '4rem', marginRight: '4rem', maxWidth: "90vw" }}>
                <h1>Submitted Form Data</h1>
                <select
                    onChange={(e) => setCurrentForm(e.target.value)}
                    value={currentForm}>
                    <option value="">Select a form</option>
                    {formsConfigDataSample?.map((form, index) => (
                        <option key={index} value={form.id}>{form.title}</option>
                    ))}
                </select>
            </div>

            {(filledFormData?.length && displayForm) &&
                <FormDataTable
                    formConfig={formsConfigData[parseInt(currentForm)]}
                    SubmittedDataList={displayForm} />
            }

            <Link to="/" className="homeLink"> 🔙 Home Page </Link>
        </>
    )
}

export default SubmittedForms