import api from ".";
import type { productType } from "../types/productType";
// Thêm sản phẩm mới

export const getProducts = () => api.get(`/products`);
export const getProductById = (id: number) => api.get(`/products/${id}`);
export const createProduct = (data: productType) => api.post(`/products`, data);
export const updateProduct = (id: number, data: productType) => api.put(`/products/${id}`, data);
export const deleteProduct = (id: number) => api.delete(`/delete/${id}`);
