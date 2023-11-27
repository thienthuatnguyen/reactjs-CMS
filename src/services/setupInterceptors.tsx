import { baseURL } from '../utils/config'

function SetupInterceptors(http, contentType?: any)  {
    http.interceptors.request.use(
        config => {
            config.headers['Authorization'] = `Bearer ${localStorage.getItem('o2fine')}`
            config.headers['content-type'] = contentType['Content-Type'] ? contentType['Content-Type'] : 'application/json'
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )

    http.interceptors.response.use(function(response) {
        if(response.data.error) {
            if(response.data.error_code === 403) {
                localStorage.removeItem('o2fine');
                window.location.href = '/dang-nhap';
            }
            if(response.data.error_code === 401) {
                localStorage.removeItem('o2fine');
                window.location.href = '/dang-nhap';
            }
        }
        return response;
    }, function (error) {
        const status = error?.response?.status || 0
        const resBaseURL = error?.response?.config?.baseURL
        if (resBaseURL === baseURL && status === 401) {
            if (localStorage.getItem('o2fine')) {
                localStorage.clear()
                window.location.assign('/dang-nhap')
                return Promise.reject(error)
            } else {
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    })
}

export default SetupInterceptors