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
        }
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

            <FormDataTable
                formConfig={formsConfigData[parseInt(currentForm)]}
                forms={filledFormData} />

            <Link to="/" className="homeLink"> 🔙 Home Page </Link>
        </div>
    )
}

export default SubmittedForms