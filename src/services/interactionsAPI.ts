import axios from 'axios';
const baseUrlAPI = 'http://192.168.1.1'

export const createFormAPI = async ({ data }: any) => {
    try {
        const url = baseUrlAPI + '/createForm';
        const response = await axios.post(url, data)
        if (response.data) {
            return response.data
        }
    } catch (error) {
        console.error('Error:', (error as Error).message, '|', error);
        return error
    }
}