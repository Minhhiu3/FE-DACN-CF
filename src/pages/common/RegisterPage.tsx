import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../validations/authSchema';
import { toast } from 'react-toastify';
import { RegisterApi } from '../../api/authApi';
import { getErrMes } from '../../helpers/errorHandler';
import { Navigate, useNavigate } from 'react-router-dom';
import type { RegisterData } from '../../types/authType';
const RegisterPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterData) => {
        try {
            const { email, password, name, confirmPassword } = data;
            const res = await RegisterApi({
                email, password, name, confirmPassword
            });
            console.log(res);
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            reset();
            toast.success("Đăng ký thành công");
            navigate("/login");
        } catch (error: any) {
            console.error("Có lỗi:", error);
            toast.error(getErrMes(error));
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Đăng ký tài khoản</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto" style={{ maxWidth: 500 }}>
                {/* Username */}
                <div className="mb-3">
                    <label className="form-label">UserName</label>
                    <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} {...register("name")} />
                    {errors?.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register("email")} />
                    {errors?.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register("password")} />
                    {errors?.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} {...register("confirmPassword")} />
                    {errors?.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Register</button>
                    <button type="button" className="btn btn-secondary" onClick={() => reset()}>Reset</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
