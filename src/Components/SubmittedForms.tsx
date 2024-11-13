import { useState } from "react";
import { formsConfigDataSample } from "../assets/formConfigs";
import { Link } from "react-router-dom";
import FormDataTable from "./FormDataTable";

function SubmittedForms() {
    const [currentForm, setCurrentForm] = useState<string>("0");
    const [formsConfigData, setFormsConfigData] = useState(formsConfigDataSample);
    const [filledFormData, setFilledFormData] = useState([
        {
            "fullName": "Flavia Warner",
            "preferredName": "Tucker Forbes",
            "primaryAddress": "Quam et vitae conseq",
            "city": "Nesciunt dolorem ex",
            "state": "Qui sit non veniam",
            "county": "Quas culpa corporis",
            "zipCode": "72975",
            "birthDate": "1994-02-05"
        },
        {
            "fullName": "Flavia",
            "preferredName": "Tuckerbes",
            "primaryAddress": "Qu vitae conseq",
            "city": "Nesciunt dolorem ex",
            "state": "Qui sit non veniam",
            "county": "Quas culpa corporis",
            "zipCode": "72975",
            "birthDate": "1994-02-05"
        },
        // {
        //     "employeeFullName": "Lee Edwards",
        //     "preferredName": "Ursa Burnett",
        //     "primaryAddress": "Quasi dignissimos au",
        //     "primaryCity": "Molestiae aut volupt",
        //     "primaryState": "Aut nulla inventore ",
        //     "primaryCounty": "Voluptates reprehend",
        //     "primaryZipCode": "86644",
        //     "supplementalAddress": "Sunt odit id et ani",
        //     "supplementalCity": "A eum commodi non ac",
        //     "supplementalState": "Enim saepe incidunt",
        //     "supplementalCounty": "Aspernatur ex aut ni",
        //     "supplementalZipCode": "79545",
        //     "birthDate": "2005-11-28",
        //     "homeTelephoneNumber": "+1 (217) 561-6376",
        //     "cellTelephoneNumber": "+1 (974) 599-7828",
        //     "emergencyContactName": "Oleg Rose",
        //     "emergencyContactAddress": "Harum quia porro est",
        //     "emergencyContactCity": "Ut reprehenderit non",
        //     "emergencyContactStateProvince": "At non blanditiis as",
        //     "emergencyContactPostalCode": "Eu quas molestiae si",
        //     "emergencyContactCountry": "In deserunt sit quas",
        //     "emergencyContactRelationship": "In ut esse magnam ad",
        //     "emergencyContactCellTelephone": "+1 (707) 837-3449",
        //     "emergencyContactHomeTelephone": "+1 (409) 128-9352",
        //     "emergencyContactWorkTelephone": "+1 (149) 738-7534",
        //     "professionalExperience": [
        //         {
        //             "companyName": "Perez Bennett Co",
        //             "designation": "Sit quaerat vitae ve",
        //             "fromDate": "1999-09-11",
        //             "toDate": "2011-07-05"
        //         },
        //         {
        //             "companyName": "Castillo Patrick Traders",
        //             "designation": "Modi amet quas volu",
        //             "fromDate": "1970-08-26",
        //             "toDate": "1980-11-06"
        //         },
        //         {
        //             "companyName": "Kerr Keller Trading",
        //             "designation": "Autem est nulla eni",
        //             "fromDate": "2016-08-27",
        //             "toDate": "2024-07-20"
        //         }
        //     ],
        //     "employeeSignature": "Reprehenderit recusa",
        //     "date": "2013-04-08",
        //     "employeeIdentificationNumber": "687",
        //     "name": "Lucy Hinton",
        //     "relationship": "Nobis ex anim volupt",
        //     "cellPhone": "+1 (887) 814-7912",
        //     "homePhone": "+1 (606) 951-3921",
        //     "workPhone": "+1 (115) 801-7651",
        //     "fullName": "Allen Church",
        //     "city": "Nisi nostrum pariatu",
        //     "state": "Qui non magnam velit",
        //     "county": "Magnam fugiat conse",
        //     "zipCode": "43007",
        //     "gender": "Male",
        //     "maritalStatus": "Single"
        // }
    ]);

    return (
        <div>
            <div style={{ marginLeft: '4rem', marginRight: '4rem', maxWidth: "90vw" }}>
                <h1>Submitted Form Data</h1>
                <select
                    onChange={(e) => setCurrentForm(e.target.value)}
                    value={currentForm}>
                    {formsConfigDataSample?.map((form, index) => (
                        <option key={index} value={`${index}`}>{form.title}</option>
                    ))}
                </select>
            </div>

            {filledFormData &&
                <FormDataTable
                    formConfig={formsConfigData[parseInt(currentForm)]}
                    forms={filledFormData} />
            }

            <Link to="/" className="homeLink"> 🔙 Home Page </Link>
        </div>
    )
}

export default SubmittedForms