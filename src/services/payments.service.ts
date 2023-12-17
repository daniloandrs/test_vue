import { HTTP } from "@/api/http"
import type { ResponseBody } from "@/api/response-body"

export class PaymentService {

    static async getCurrentBalance() {
        const response = await HTTP.get<CurrentBalance, ResponseBody<CurrentBalance>>(
            `/getActualBalance`
        )
        return response.data
    }

    static async getProviders() {
        const response = await HTTP.get<ListProviders, ResponseBody<ListProviders>>(
            `/getProviders`
        )
        return response.data
    }
}


export interface CurrentBalance {
    balanceCommerce: string
}

export type ListProviders = {
    companies: Array<Company>
}

export interface Company {
    company: string
    _id: string,
    image: string
}