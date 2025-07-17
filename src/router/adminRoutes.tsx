// products & categories file layout
import AdminProducts from '../pages/admin/product/AdminProducts';
import ProductFormAdd from '../pages/admin/product/ProductFormAdd';
import AdminOrders from '../pages/admin/AdminOrders';
import AdminCategories from '../pages/admin/category/AdminCategories';
import CategoryFormAdd from '../pages/admin/category/CategorieFormAdd';
import ProductFormEdit from '../pages/admin/product/ProductFormEdit';
import AdminDetailProduct from '../pages/admin/product/AdminDetailProduct';
import AdminBrands from '../pages/admin/brand/AdminBrands';
import SubCategoryFormAdd from '../pages/admin/sub-category/AdminSub-CategoriesFormAdd';
import AdminSubCategories from '../pages/admin/sub-category/AdminSub-Categories';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
//common file layout
import Setting from '../pages/common/Setting';
import Dashboard from '../pages/admin/Dashboard';

//admin user file layout
import AdminUserControllers from '../pages/admin/AdminUserControllers';
import BrandFormAdd from '../pages/admin/brand/BrandFormAdd';


const adminRoutes = [
    //common routes
    { index: true, element: <Dashboard /> },
    { path: 'setting', element: <Setting /> },

    // product & category routes
    { path: 'products', element: <AdminProducts /> },
    { path: 'product/:id', element: <AdminDetailProduct /> },
    { path: 'products/add', element: <ProductFormAdd /> },
    { path: 'categories', element: <AdminCategories /> },
    { path: 'categories/add', element: <CategoryFormAdd onSuccess={() => {
        const navigate = useNavigate();
        navigate('/categories');
    }} /> },
    { path: 'brands', element: <AdminBrands /> },
    { path: 'brands/add', element: <BrandFormAdd onSuccess={function (): void {
        throw new Error('Function not implemented.');
    } } />},
    { path: 'orders', element: <AdminOrders /> },
    { path: 'products/edit/:id', element: <ProductFormEdit /> },

    { path: 'sub-categories', element: <AdminSubCategories /> },
    { path: 'sub-categories/add', element: <SubCategoryFormAdd onSuccess={() => {
        const navigate = useNavigate();
        navigate('/sub-categories');
    }} /> },
    // user routes
    { path: 'users', element: <AdminUserControllers /> },
]

export default adminRoutes