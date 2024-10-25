import { getAccessToken } from '@/lib/aurinko'
import { AxiosError } from 'axios'
import { NextResponse, NextRequest } from 'next/server'


export const GET = async (req: NextRequest) => {
    const params = req.nextUrl.searchParams
    const code = params.get('code')
    if (!code) {
        return NextResponse.json({ error: "No code provided" })
    }
    try {
        const accessTokenDetails = await getAccessToken(code)
        return NextResponse.json({ message: "Success", authDetails: accessTokenDetails }, { status: 200 })
    } catch (error) {
        const errorDetails = error as AxiosError
        return NextResponse.json({ error: errorDetails.response?.data }, { status: errorDetails.status })
    }
}


