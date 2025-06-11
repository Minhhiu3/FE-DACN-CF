import { useEffect, useState } from "react";
import * as api from "../api/authApi";
import { getErrMes } from "../helpers/errorHandler";
import type { RegisterData } from "../types/authType";
export const useUserList = () => {
    const [users, setUsers] = useState<RegisterData[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const res = await api.GetAllUsers();
            setUsers(res.data);
        } catch (error) {
            getErrMes(`loi goi api ${error}`);
        } finally {
            setLoading(false);
        }

    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return { users, loading, fetchUsers };
};
