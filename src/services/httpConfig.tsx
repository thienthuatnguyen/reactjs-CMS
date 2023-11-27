import axios from 'axios'
import { baseURL } from '../utils/config'
import SetupInterceptors from './setupInterceptors'

const contentType: any = {'Content-Type' : null};
const http = axios.create({
    baseURL: baseURL
})

SetupInterceptors(http, contentType)

export  {http, contentType}
