import http from "./httpConfig";

const hopitalService = {

    getDepartments: ()=> {
        return http.get('/departments/list');
    },
    getDoctors: (params)=> {
        return http.get('/doctors/list',  {params: params});
    },
    getDoctorType: ()=> {
        return http.get('/doctors/list-type');
    },
    getHospitals: (params?: any)=> {
        return http.get('/hospitals/list', {params: params});
    },
   
}

export default hopitalService

