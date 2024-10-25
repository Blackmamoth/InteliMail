
import httpClient from "@/app/config/axios.config"
import { AppSettings } from "@/app/config/settings.config"
import { AxiosError } from "axios"

export const getAurinkoLink = (serviceType: "Google") => {
    const { AURINKO_CLIENT_ID, NEXT_PUBLIC_URL, AURINKO_BASE_URL } = AppSettings
    const params = new URLSearchParams()
    params.set('clientId', AURINKO_CLIENT_ID!)
    params.set('serviceType', serviceType)
    params.set('scopes', "Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts")
    params.set('returnUrl', `${NEXT_PUBLIC_URL}/api/aurinko/callback`)
    params.set('responseType', 'code')
    return `${AURINKO_BASE_URL}/v1/auth/authorize?${params.toString()}`
}

export const getAccessToken = async (code: string) => {
    try {
        const { AURINKO_BASE_URL, AURINKO_CLIENT_ID, AURINKO_CLIENT_SECRET } = AppSettings
        const request = await httpClient.post(`${AURINKO_BASE_URL}/v1/auth/token/${code}`, {}, {
            auth: {
                username: AURINKO_CLIENT_ID!,
                password: AURINKO_CLIENT_SECRET!,
            }
        })
        return request.data as {
            accountId: string,
            accessToken: string
        }
    } catch (error: unknown) {
        return (error as AxiosError).response?.data
    }
}