export interface ISignAuthPayload {
  email: string
  password: string
}

export interface ISignAuthResponse {
  id: number
  access_token: string
  expiresIn: number
}
