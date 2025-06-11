import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "../pages/admin/common/Header";
import Footer from "../pages/admin/common/Footer";
import Sidebar from "../pages/admin/common/Sidebar";
import { Outlet } from "react-router-dom";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const Content = styled.main<{ collapsed: boolean }>`
  flex-grow: 1;
  padding: 16px;
  overflow-y: auto;
  background-color: #f9f9f9;
  margin-left: ${({ collapsed }) => (collapsed ? "80px" : "250px")};
  transition: margin-left 0.3s;
`;

const AdminLayouts = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <LayoutWrapper>
            <Header />
            <BodyWrapper>
                <Sidebar collapsed={collapsed} onToggle={handleToggleSidebar} />
                <Content collapsed={collapsed}>
                    <Outlet />
                </Content>
            </BodyWrapper>
            <Footer />
        </LayoutWrapper>
    );
};

export default AdminLayouts;
