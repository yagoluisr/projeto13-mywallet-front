import axios from 'axios';

const BASE_URL = 'http://localhost:5000'

function creatConfig(token) {
    const config =
    {
        headers: { Authorization: `Bearer ${token}` }
    }
    return config;
}

function register(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function login(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
}

function searchUserData(token) {
    const config = creatConfig(token)
    const promise = axios.get(`${BASE_URL}/`, config);
    return promise;
}

function insertEntry(body, token) {
    const config = creatConfig(token)
    const promise = axios.post(`${BASE_URL}/novaentrada`, body, config);
    return promise;
}


export { register, login, searchUserData, insertEntry };