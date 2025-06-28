import api from ".";
import type { CategoryType } from "../types/categoryType";
// Thêm sản phẩm mới

export const getCategory = () => api.get(`/categories`);
export const getCategoryById = (id: number) => api.get(`/categories/${id}`);
export const createCategory = (data: CategoryType) => api.post(`/categories`, data);
export const updateCategory = (id: number, data: CategoryType) => api.put(`/categories/${id}`, data);
export const deleteCategory = (id: number) => api.delete(`/categories/${id}`);
