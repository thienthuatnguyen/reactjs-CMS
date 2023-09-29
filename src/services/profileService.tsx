import http from "./httpConfig";

const profileService = {

    getProvince: ()=> {
        return http.get('/location/province');
    },
    getDistrict: (province_id)=> {
        let params = {province_id: province_id}
        return http.get('/location/district', {params: params});
    },
    getWard: (district_id)=> {
        let params = {district_id: district_id}
        return http.get('/location/ward', {params: params});
    },
    getListMedicalProfile: (params)=> {
        return http.get('/customer/get-list-medical-profile', {params: params});
    },
    createMedicalProfile: (data) => {
        return http.post('/customer/create-medical-profile',data);
    },
    updateMedicalProfile: (profileId , data) => {
        return http.put(`/customer/update-medical-profile/${profileId}`,data);
    },
    findMedicalProfile: (profileId)=> {
        return http.get(`/customer/find-medical-profile/${profileId}`);
    },
    getProfessions: ()=> {
        return http.get('/customer/professions');
    },
    deleteMedicalProfile: (profileId)=> {
        return http.delete(`/customer/delete-medical-profile/${profileId}`);
    },
}

export default profileService