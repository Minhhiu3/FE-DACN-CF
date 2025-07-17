import { useEffect, useState } from "react";
import * as api from "../api/productApi";
import { getErrMes } from "../helpers/errorHandler";
import type { ProductType } from "../types/productType";
export const useProductList = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            setLoading(true);
            const res = await api.getProducts();
            setProducts(res.data.data);
        } catch (error) {
            getErrMes(`loi goi api ${error}`);
        } finally {
            setLoading(false);
        }

    };

    const removeProduct = async (id: string) => {
        try {
            await api.deleteProduct(id);
            fetchProducts(); // Refresh list
        } catch (error) {
            getErrMes(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, loading, fetchProducts, removeProduct };
};
