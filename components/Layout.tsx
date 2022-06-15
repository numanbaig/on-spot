import React from 'react';
import NavBar from './NavBar/Navbar'
import Footer from './Footer/Footer'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <NavBar />
            {children}
           <div/> 
        </div>
    )
}

export default Layout;