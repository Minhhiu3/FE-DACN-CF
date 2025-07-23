// router/index.tsx hoặc router.tsx
import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import clientRoutes from './clientRoutes';
import adminRoutes from './adminRoutes';
import ClientLayouts from '../layouts/ClientLayouts';
import AdminLayouts from '../layouts/AdminLayouts';
import RegisterPage from '../pages/common/RegisterPage';

//protected
import ProtectedRoute from './ProtectedRoute';
import LoginPage from '../pages/common/LoginPage';
import UserProfile from '../pages/common/UserInfo';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientLayouts />,
        children: clientRoutes,
    },
    // {
    //     path: '/admin',
    //     element: <ProtectedRoute />,
    //     children: [
    //         {
    //             path: '',
    //             element: <AdminLayouts />,
    //             children: adminRoutes,
    //         }
    //     ]
    // },
    {
        path: '/admin',
        element: <AdminLayouts />,
        children: adminRoutes,
    },
    //emty layout
    { path: '/register', element: <RegisterPage />, },
    { path: '/login', element: <LoginPage /> },
    { path: '/user-profile', element: <UserProfile /> },
    { path: '*', element: <Navigate to="/" replace /> }
]);
