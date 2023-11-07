import { IBooking, IFee } from "../models/hospital.model";
import http from "./httpConfig";

const hopitalService = {

    getDepartments: (params?:any)=> {
        return http.get('/departments/list', {params: params});
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
    getTimeWorkDoctor: (params)=> {
        return http.get('/doctors/time-work',  {params: params});
    },
    callServiceFee: (data: IFee) => {
        return http.post('/hospital/cal-service-fee',data);
    },
    booking: (data: IBooking) => {
        return http.post('/hospital/booking',data);
    },
   
}

export default hopitalService

