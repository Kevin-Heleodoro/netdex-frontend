import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL + '/api/v1/users';

class UserDataService {
    getUserInfo(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createNewUser(data) {
        return axios.post(`${BASE_URL}/new`, data);
    }

    updateUser(id, data) {
        return axios.put(`${BASE_URL}/update/${id}`, data);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserDataService();
