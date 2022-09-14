import * as axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '23f0d013-825b-4922-8b88-0221bfa9c74a'
    }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
                withCredentials: true
        })
        .then(response => {
            return response.data;
    }); // promise where there is only data
};

/*export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
                withCredentials: true
        })
        .then(response => {
            return response.data;
    });
};*/