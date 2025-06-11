import { z } from "zod";
export const loginSchema = z.object({
    email: z.string().email({ message: "Email không hợp lệ" }).min(6, "Email phải có ít nhất 6 ký tự"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").max(20, "Mật khẩu không được quá 20 ký tự"),

})
export const registerSchema = z.object({
    name: z.string().min(2, "Tên phải có ít nhất 2 ký tự").max(50, "Tên không được quá 50 ký tự"),
    email: z.string().email({ message: "Email không hợp lệ" }),
    password: z.string().min(6, "phải có ít nhất 6 ký tự").max(20, "Mật khẩu không được quá 20 ký tự"),
    confirmPassword: z.string().min(6, "phải có ít nhất 6 ký tự").max(20, " mật khẩu không được quá 20 ký tự"),
}).refine((data) => data.password === data.confirmPassword, {
    message: " mật khẩu không khớp",
    path: ["confirmPassword"],
});