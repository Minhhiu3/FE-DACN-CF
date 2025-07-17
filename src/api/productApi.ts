import api from ".";
import type { ProductType } from "../types/productType";
// Thêm sản phẩm mới

export const getProducts = () => api.get(`/products`);
export const getProductById = (id: number) => api.get(`/products/${id}`);
export const createProduct = (data: ProductType) => api.post(`/products`, data);
export const updateProduct = (id: number, data: ProductType) => api.put(`/products/${id}`, data);
export const deleteProduct = (id: string) => api.delete(`/product/delete/${id}`);
