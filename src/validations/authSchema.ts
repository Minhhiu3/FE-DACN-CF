// validations/authSchema.ts
import { z } from "zod";
import MESSAGES from "../../src/Message.tsx";

export const registerSchema = z
  .object({
    fullName: z.string().min(1, MESSAGES.USER.FULLNAME_REQUIRED),
    email: z.string().email(MESSAGES.EMAIL.EMAIL_INVALID),
    password: z
      .string()
      .min(6, MESSAGES.PASSWORD.PASSWORD_TOSHORT)
      .max(20, MESSAGES.PASSWORD.PASSWORD_TOLONG),
    confirmPassword: z.string(),
    phoneNumber: z.string().optional(),
    address: z.string().optional(),
    bios: z.string().optional(),
    avatar: z.string().optional(),
    role: z.enum(["guest", "user", "admin"]).optional().default("guest"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });
