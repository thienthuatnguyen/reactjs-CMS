import http from "./httpConfig";

const authService = {
    login: (data) => {
        return http.post('/customer/login',data);
    },
    signUp: (data) => {
        return http.post('/customer/register',data);
    },
    getUser: ()=> {
        return http.get('/customer/profile');
    },
    updateUser: (data)=> {
        return http.put('/customer/update-profile', data);
    },
    logout() {
        return http.get('/customer/logout');
    }
}

export default authService