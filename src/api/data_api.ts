import {type baseResponse, useAxios} from "@/api/index.ts";

export interface dataType {
    "id": string
    "name": string
    "addr": string
    "avatar": string
    "ip": string
}

export function getDataApi(): Promise<baseResponse<dataType[]>> {
    return useAxios.get("/api/get_data")
}