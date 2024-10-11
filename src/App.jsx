import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Service from './pages/Service'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Layout>
        <Home />
        <About />
        <Portfolio />
        <Service />
        <Experience />
        <Contact />
      </Layout>
    </>
  )
}

export default App
