import api from ".";
import type { brandType } from "../types/brandType";
// Thêm sản phẩm mới

export const getBrand = () => api.get(`/brands`);
export const getBrandById = (id: number) => api.get(`/brands/${id}`);
export const createBrand = (data: brandType) => api.post(`/brands`, data);
export const updateBrand = (id: number, data: brandType) => api.put(`/brands/${id}`, data);
export const deleteBrand = (id: number) => api.delete(`/brands/${id}`);
