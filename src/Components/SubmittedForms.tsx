import { useEffect, useState } from "react";
import { FormConfig, SubmittedDataList, submittedFormsListSample, formsConfigDataSample } from "../assets/formConfigs";
import { Link } from "react-router-dom";
import FormDataTable from "./FormDataTable";
import toast, { Toaster } from "react-hot-toast";
import { getFormAPI, getSubmittedFormsAPI } from "../services/interactionsAPI";

function SubmittedForms() {
    const [currentForm, setCurrentForm] = useState<string>("0");
    const [displayForm, setDisplayForm] = useState<null | SubmittedDataList[]>(null);
    const [EmptyFormDataList, setEmptyFormDataList] = useState<FormConfig[] | null>(null)
    const [formsConfigData, setFormsConfigData] = useState<FormConfig[] | null>(null)
    const [filledFormData, setFilledFormData] = useState<null | SubmittedDataList[]>(null);

    useEffect(() => {
        if (currentForm) {
            //submitted data
            const list = filledFormData?.filter((form) => form.formId === currentForm);
            if (list) setDisplayForm(list);

            //Empty Form Data
            const configlist = EmptyFormDataList?.filter((form) => form.id === currentForm);
            if (configlist) setFormsConfigData(configlist);
        } else {
            setDisplayForm(null);
        }
    }, [currentForm]);

    async function getAllForms() {
        const response = await getFormAPI();
        if (response) {
            // console.log(response); //test
            setEmptyFormDataList(response);
        }
    }

    async function getSubmittedForms() {
        const response = await getSubmittedFormsAPI();
        if (response) {
            // console.log(response); //test
            setFilledFormData(response);
        }
    }


    useEffect(() => {
        //API 4 call here
        // setFilledFormData(submittedFormsListSample); //Uncomment to Load Dummy Data
        // setEmptyFormDataList(formsConfigDataSample); //Uncomment to Load Dummy Data
        try {
            getAllForms();
            getSubmittedForms();
        } catch (error) {
            toast.error("Unable to retrieve submitted forms");
        }
    }, [])


    return (
        <>
            <div style={{ marginLeft: '4rem', marginRight: '4rem', maxWidth: "90vw" }}>
                <h1>Submitted Form Data</h1>
                <select
                    onChange={(e) => setCurrentForm(e.target.value)}
                    value={currentForm}>
                    <option value="">Select a form</option>
                    {EmptyFormDataList?.map((form, index) => (
                        <option key={index} value={form.id}>{form.title}</option>
                    ))}
                </select>
            </div>

            {(filledFormData?.length && displayForm) &&
                <FormDataTable
                    formConfig={formsConfigData}
                    SubmittedDataList={displayForm} />
            }

            <Toaster />
            <Link to="/" className="homeLink"> 🔙 Home Page </Link>
        </>
    )
}

export default SubmittedForms