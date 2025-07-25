import api from "../api/index"
import type { LoginData } from "../types/authType";
import type { RegisterData } from "../types/authType";
export const LoginApi = (data: LoginData) => api.post("/auth/login", data);
export const RegisterApi = (data: RegisterData) => api.post("/auth/register", data);
export const GetAllUsers = () => api.get('/users')
