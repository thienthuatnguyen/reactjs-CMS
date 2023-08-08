import axios from 'axios'
import { baseURL } from '../utils/config'
import SetupInterceptors from './setupInterceptors'


const http = axios.create({
    baseURL: baseURL
})

SetupInterceptors(http)

export default http