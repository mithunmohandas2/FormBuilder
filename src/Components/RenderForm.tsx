import React, { useEffect, useState } from 'react';
import DynamicForm from './DynamicForm';
import { formsConfigDataSample } from '../assets/formConfigs';
import { Link } from 'react-router-dom';

const RenderForm: React.FC = () => {
    const [formsConfigData, setFormsConfigData] = useState(formsConfigDataSample[0]);

    useEffect(() => {
        const query = window?.location?.search
        if (query) {
            const formId = query.split('=')[1];
            const formData = formsConfigDataSample.filter((item) => item?.id == formId)
            setFormsConfigData(formData[0]);
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
