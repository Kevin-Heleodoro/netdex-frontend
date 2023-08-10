import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL + '/api/v1/contacts';

class ContactDataService {
    getAll(userId) {
        return axios.get(`${BASE_URL}/all/${userId}`);
    }

    getOne(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createNewContact(data) {
        return axios.post(`${BASE_URL}/new`, data);
    }

    createNewNote(id, data) {
        return axios.post(`${BASE_URL}/notes/new/${id}`, data);
    }

    updateContact(id, data) {
        console.log({ id, data });
        return axios.put(`${BASE_URL}/${id}`, data);
    }

    deleteContact(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ContactDataService();
