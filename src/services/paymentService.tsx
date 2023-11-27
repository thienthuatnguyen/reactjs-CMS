import { http } from "./httpConfig";

const paymentService = {
    getPayment: ()=> {
        return http.get('/customer/payment-methods');
    }
}

export default paymentService