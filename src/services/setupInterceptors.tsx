import { baseURL } from '../utils/config'


export const SetupInterceptors = http => {

    http.interceptors.request.use(
        config => {
            config.headers['token'] = `${localStorage.getItem('token')}`
            config.headers['content-type'] = 'application/json'
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )

    http.interceptors.response.use(function(response) {
        return response
    }, function (error) {
        const status = error?.response?.status || 0
        const resBaseURL = error?.response?.config?.baseURL
        if (resBaseURL === baseURL && status === 401) {
            if (localStorage.getItem('token')) {
                localStorage.clear()
                window.location.assign('/')
                return Promise.reject(error)
            } else {
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    })
}

export default SetupInterceptors