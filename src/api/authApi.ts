import api from "../api/index"
import type { LoginData } from "../types/authType";
import type { RegisterData } from "../types/authType";
export const LoginApi = (data: LoginData) => api.post("/login", data);
export const RegisterApi = (data: RegisterData) => api.post("/register", data);
export const GetAllUsers = () => api.get('/users')
