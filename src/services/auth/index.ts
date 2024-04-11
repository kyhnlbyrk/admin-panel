import { LoginType } from '@/types/login.type'
import { GlobalAPIResponse } from '@/types/request.type'
import { AuthAPI } from '..'

export async function Login(data: LoginType) {
	return AuthAPI.post<GlobalAPIResponse<string>>('login/', data)
}
