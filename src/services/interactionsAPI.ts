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
        console.error('Error:', (error as Error).message, '|', error);
        return error
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
        console.error('Error:', (error as Error).message, '|', error);
        return error
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
        console.error('Error:', (error as Error).message, '|', error);
        return error
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
        console.error('Error:', (error as Error).message, '|', error);
        return error
    }
}