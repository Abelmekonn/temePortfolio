import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col  min-h-screen">
            {/* Header */}
            <Header />

            {/* Main content */}
            <main className="flex-grow  mx-auto">
                {children}
            </main>

        </div>
    );
};

export default Layout;
