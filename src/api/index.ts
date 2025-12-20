import axios from "axios";

export const useAxios = axios.create({
    timeout: 6000,
    baseURL: "", // 如果你前端配置了代理，这个就不要填了
})

useAxios.interceptors.request.use((config)=>{
    config.headers["token"] = "xxx"
    return config
})

// 响应拦截器
useAxios.interceptors.response.use((config)=>{
    return config.data
})


export interface baseResponse<T> {
    code: number
    data: T
    msg: string
}