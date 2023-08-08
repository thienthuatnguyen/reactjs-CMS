import axios from 'axios';
import {getToken} from './storageUtil'

export function fetch(url, endpoint, params) {
    return axios
        .get(url + endpoint, {
            params: params ? params : {},
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getToken()
            }
        });
}

export function store(url, endpoint, data) {
    return axios
        .post(url + endpoint, data, {
            headers: {
                'Content-Type': ' multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getToken()
            }
        });
}

export function update(url, endpoint, data) {
    return axios
        .put(url + endpoint, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getToken()
            }
        });
}

export function destroy(url, endpoint) {
    return axios
        .delete(url + endpoint, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getToken()
            }
        });
}