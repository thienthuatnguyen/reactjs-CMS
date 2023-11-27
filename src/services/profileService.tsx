import { contentType, http } from "./httpConfig";

const profileService = {

    getProvince: () => {
        return http.get('/location/province');
    },
    getDistrict: (province_id) => {
        let params = { province_id: province_id }
        return http.get('/location/district', { params: params });
    },
    getWard: (district_id) => {
        let params = { district_id: district_id }
        return http.get('/location/ward', { params: params });
    },
    getListMedicalProfile: (params) => {
        return http.get('/customer/get-list-medical-profile', { params: params });
    },
    createMedicalProfile: (data) => {
        return http.post('/customer/create-medical-profile', data);
    },
    updateMedicalProfile: (profileId, data) => {
        return http.put(`/customer/update-medical-profile/${profileId}`, data);
    },
    findMedicalProfile: (profileId) => {
        return http.get(`/customer/find-medical-profile/${profileId}`);
    },
    getProfessions: () => {
        return http.get('/customer/professions');
    },
    deleteMedicalProfile: (profileId) => {
        return http.delete(`/customer/delete-medical-profile/${profileId}`);
    },
    getBookingList: (profile_id) => {
        let params = { profile_id: profile_id }
        return http.get('/booking/list', { params: params });
    },
    getMedicalResult: (bookingId) => {
        return http.get(`/booking/medical-result/${bookingId}/list`, { params: { bookingId: bookingId } });
    },
    createMedicalResult: (file, bookingId) => {
        contentType['Content-Type'] = 'multipart/form-data';
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'Accept': 'multipart/form-data'
            },
            params: {bookingId: bookingId}
        }
        return http.post(`/booking/medical-result/${bookingId}/create`, formData, config);
    },
    feedBack: (data) => {
        return http.post('/customer/footer-feedback', data);
    }
}

export default profileService