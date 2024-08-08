import { EnpointEnum } from "@/enum/endpoint.enum"

const url = process.env.NEXT_PUBLIC_API

class ApiService {
    async get(endpoint: EnpointEnum) {
        return (await fetch(`${url}/${endpoint}`, { method: 'GET' })).json()
    }
}

const apiService = new ApiService()
export default apiService