import type {baseResponse} from "@/api/index.ts";
import {useAxios} from "@/api/index.ts";

export interface routeType {
    name: string
    path: string
    component: string
}

export function getRouteApi(): Promise<baseResponse<routeType[]>>{
    return  useAxios.get("/api/get_route")
}