import axios from 'axios';
import { FormConfig, SubmittedDataList } from '../assets/formConfigs';
const baseUrlAPI = 'https://localhost:7179'

export const createFormAPI = async (data: FormConfig) => {
    try {
        const url = baseUrlAPI + '/FormEngineCreate/createForm';
        const response = await axios.post(url, data)
        if (response?.status) {
            return response
        }
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export const submitFormAPI = async (data: SubmittedDataList) => {
    try {
        const url = baseUrlAPI + '/FormEngineCreate/submitForm';
        const response = await axios.post(url, data)
        if (response?.status) {
            return response
        }
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export const getFormAPI = async () => {
    try {
        const url = baseUrlAPI + '/FormEngineCreate/Getforms';
        const response = await axios.get(url)
        if (response?.status && response?.data) {
            return response.data
        }
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export const getSubmittedFormsAPI = async () => {
    try {
        const url = baseUrlAPI + '/FormEngineCreate/GetSubmittedforms';
        const response = await axios.get(url)
        if (response?.status && response?.data) {
            return response.data
        }
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export const generateFormData = async (data: { file: File; prompt: string }) => {
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("prompt", data.prompt);

    const url = baseUrlAPI + '/FormEngineCreate/GetSubmittedforms';

    const response = await axios.post(url, formData)
    if (response?.status && response?.data) {
        return response.data
    } else {
        throw new Error("Failed to generate form data from PDF");
    }
};
