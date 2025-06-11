import React from "react";
import { NavLink } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiHome, FiUsers, FiBox, FiList, FiShoppingCart, FiSettings } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

interface SiderBarAdminProps {
    collapsed: boolean;
    onToggle: () => void;
}

const menuItems = [
    { label: "Dashboard", icon: <FiHome />, path: "" },
    { label: "Users", icon: <FiUsers />, path: "users" },
    { label: "Products", icon: <FiBox />, path: "products" },
    { label: "Categories", icon: <FiList />, path: "categories" },
    { label: "Orders", icon: <FiShoppingCart />, path: "orders" },
    { label: "Settings", icon: <FiSettings />, path: "setting" },
];

const SiderBarAdmin: React.FC<SiderBarAdminProps> = ({ collapsed, onToggle }) => {
    return (
        <div
            className="bg-info text-white d-flex flex-column p-3 vh-100"
            style={{
                width: collapsed ? "80px" : "250px",
                transition: "width 0.3s",
                position: "fixed",
                top: 0,
                left: 0,
                overflowX: "hidden",
                zIndex: 1000,
            }}
        >
            <button
                className="btn btn-outline-light mb-4 align-self-end"
                onClick={onToggle}
                style={{ alignSelf: collapsed ? "center" : "flex-end" }}
            >
                {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
            </button>

            <nav className="nav flex-column">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `nav-link text-white d-flex align-items-center mb-2 ${isActive ? "fw-bold" : ""}`
                        }
                    >
                        <span className="me-2">{item.icon}</span>
                        {!collapsed && item.label}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default SiderBarAdmin;
