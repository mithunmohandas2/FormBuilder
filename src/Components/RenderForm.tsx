import React, { useEffect, useState } from 'react';
import DynamicForm from './DynamicForm';
import { formsConfigDataSample } from '../assets/formConfigs';
import { Link } from 'react-router-dom';
import { getFormAPI } from '../services/interactionsAPI';
import toast from 'react-hot-toast';

const RenderForm: React.FC = () => {
    const [formsConfigData, setFormsConfigData] = useState(formsConfigDataSample[0]);

    useEffect(() => {
        try {
            async function getAllForms() {
                const response = await getFormAPI();
                if (response) {
                    const query = window?.location?.search
                    if (query) {
                        const formId = query.split('=')[1];
                        const formData = response.filter((item: { id: string; }) => item?.id == formId)
                        // console.log(formData[0]);
                        setFormsConfigData(formData[0]);
                    }
                }
            }
            getAllForms();
        } catch (error) {
            toast.error("Unable to retrieve forms");
        }
    }, [])

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <p>Form ID : {formsConfigData?.id}</p>
                <p>Version : {formsConfigData?.version}</p>
                <p>Date : {formsConfigData?.createdDate}</p>
            </div>
            <DynamicForm formConfig={formsConfigData} />
            <div className="homeLink">
                <Link to="/formList"> 🔙 Form List </Link> |
                <Link to="/"> Home Page </Link>
            </div>
        </div>
    );
};

export default RenderForm;
