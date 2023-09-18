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
    logout() {
        return http.get('/customer/logout');
    }
}

export default authService