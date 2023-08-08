export interface ITokens{
    accessToken: string,
    refreshToken: string,
}

export interface IMessage {
    id: number,
    message: string,
    received: boolean
}