import React, { useEffect, useState } from "react";
import * as api from "../api/productApi";
import { getErrMes } from "../helpers/errorHandler";
import type { productType } from "../types/productType";
export const useProductList = () => {
    const [products, setProducts] = useState<productType[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            setLoading(true);
            const res = await api.getProducts();
            setProducts(res.data);
        } catch (error) {
            getErrMes(`loi goi api ${error}`);
        } finally {
            setLoading(false);
        }

    };

    const removeProduct = async (id: number) => {
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
