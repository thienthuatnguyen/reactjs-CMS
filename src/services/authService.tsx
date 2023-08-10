import http from "./httpConfig";

const authService = {
    login: (data) => {
        return http.post(data);
    },
    signUp: (data) => {
        return http.post(data);
    },
    getUser: ()=> {
        return http.get('/user');
    }
}

export default authService