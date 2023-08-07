import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL + '/api/v1/contacts';

class ContactDataService {
    getAll(userId) {
        return axios.get(`${BASE_URL}/all/${userId}`);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ContactDataService();
