import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../pages/client/common/ClientHeader';
import Footer from '../pages/client/common/ClientFooter';
import ClientSidebarAndSlideshow from '../pages/client/common/ClientSidebarAndSlideshow';
const ClientLayouts = () => {
    return (
        <>
            <Header />
            <ClientSidebarAndSlideshow />
            <Outlet />
            <Footer />
        </>
    )
}

export default ClientLayouts