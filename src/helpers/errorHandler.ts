import React from 'react';
import axios from 'axios';
export function getErrMes(error: unknown): string {
    if (axios.isAxiosError(error)) {
        // kiem tra neu err tu axios
        return error.response?.data?.message || error.message || "loi tu server";
    }
    if (error instanceof Error) {
        return error.message;
    }
    return "loi khong xac dinh";
}

