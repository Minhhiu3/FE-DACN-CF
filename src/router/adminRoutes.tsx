// products & categories file layout
import AdminProducts from '../pages/admin/AdminProducts';
import ProductFormAdd from '../pages/admin/ProductFormAdd';
import AdminOrders from '../pages/admin/AdminOrders';
import AdminCategories from '../pages/admin/category/AdminCategories';
import CategoryFormAdd from '../pages/admin/category/CategorieFormAdd';
import ProductFormEdit from '../pages/admin/ProductFormEdit';
import AdminDetailProduct from '../pages/admin/AdminDetailProduct';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
//common file layout
import Setting from '../pages/common/Setting';
import Dashboard from '../pages/admin/Dashboard';

//admin user file layout
import AdminUserControllers from '../pages/admin/AdminUserControllers';


const adminRoutes = [
    //common routes
    { index: true, element: <Dashboard /> },
    { path: 'setting', element: <Setting /> },

    // product & category routes
    { path: 'products', element: <AdminProducts /> },
    { path: 'product/:id', element: <AdminDetailProduct /> },
    { path: 'products/add', element: <ProductFormAdd /> },
    { path: 'categories', element: <AdminCategories /> },
    { path: "categories/add", element: <CategoryFormAdd onSuccess={() => {
        const navigate = useNavigate();
        navigate('/categories');
    }} /> },
    { path: 'orders', element: <AdminOrders /> },
    { path: 'products/edit/:id', element: <ProductFormEdit /> },

    // user routes
    { path: 'users', element: <AdminUserControllers /> },
]

export default adminRoutes