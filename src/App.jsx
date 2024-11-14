// App.js
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Loader from './components/Loader'; // Import Loader component

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (e.g., when data fetching or component mounting)
        const timer = setTimeout(() => setLoading(false), 1000); // Adjust delay as needed
        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, []);

    return (
        <>
            {loading ? (
                <Loader /> // Display loader while loading is true
            ) : (
                <Layout>
                    <Home />
                    <About />
                    <Portfolio />
                    <Service />
                    <Experience />
                    <Contact />
                </Layout>
            )}
        </>
    );
}

export default App;
