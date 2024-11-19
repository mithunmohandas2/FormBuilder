import { useEffect, useState } from "react";
import { FormConfig, formsConfigDataSample, SubmittedDataList, submittedFormsListSample } from "../assets/formConfigs";
import { Link } from "react-router-dom";
import FormDataTable from "./FormDataTable";

function SubmittedForms() {
    const [currentForm, setCurrentForm] = useState<string>("0");
    const [displayForm, setDisplayForm] = useState<null | SubmittedDataList[]>(null);
    const [formsConfigData, setFormsConfigData] = useState<FormConfig[] | null>(null)
    const [filledFormData, setFilledFormData] = useState<SubmittedDataList[]>(submittedFormsListSample);

    useEffect(() => {
        if (currentForm) {
            //submitted data
            const list = filledFormData.filter((form) => form.formId === currentForm);
            setDisplayForm(list);

            //Empty Form Data
            const configlist = formsConfigDataSample.filter((form) => form.id === currentForm);
            setFormsConfigData(configlist);
        } else {
            setDisplayForm(null);
        }
    }, [currentForm]);


    useEffect(() => {
        //API 4 call here
        setFilledFormData(submittedFormsListSample); //Pass the API response here
    }, [])


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
                    formConfig={formsConfigData}
                    SubmittedDataList={displayForm} />
            }

            <Link to="/" className="homeLink"> 🔙 Home Page </Link>
        </>
    )
}

export default SubmittedForms