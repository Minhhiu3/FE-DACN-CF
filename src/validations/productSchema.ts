import { z } from 'zod';
export const productSchema = z.object({
    name: z.string().min(2, "Tên sản phẩm phải có ít nhất 2 ký tự").max(100, "Tên sản phẩm không được quá 100 ký tự"),
    price: z.number().min(0, "Giá sản phẩm phải lớn hơn hoặc bằng 0"),
    description: z.string().max(500, "Mô tả sản phẩm không được quá 500 ký tự"),
    category: z.string().min(2, "Danh mục sản phẩm phải có ít nhất 2 ký tự").max(100, "Danh mục sản phẩm không được quá 100 ký tự"),
});