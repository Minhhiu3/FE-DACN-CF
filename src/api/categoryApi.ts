import api from ".";
import type { CategoryType,SubCategoryType } from "../types/categoryType";
// Thêm sản phẩm mới

export const getCategory = () => api.get(`/categories`);
export const getCategoryById = (id: number) => api.get(`/categories/${id}`);
export const createCategory = (data: CategoryType) => api.post(`/categories`, data);
export const updateCategory = (id: number, data: CategoryType) => api.put(`/categories/${id}`, data);
export const deleteCategory = (id: number) => api.delete(`/categories/${id}`);

// sub api
export const getSubCategories = () => api.get(`/sub-categories`);
export const getSubCategoryById = (id: number) => api.get(`/sub-categories/${id}`);
export const createSubCategory = (data: SubCategoryType) => api.post(`/sub-categories`, data);
export const updateSubCategory = (id: number, data: SubCategoryType) => api.put(`/sub-categories/${id}`, data);
export const deleteSubCategory = (id: number) => api.delete(`/sub-categories/${id}`);
