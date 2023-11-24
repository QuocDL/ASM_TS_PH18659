import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage'
import HeaderPage from './pages/components/Header'
import Footer from './pages/components/Footer'
import LoginPage from './pages/Login'
import Profile from './pages/components/Profile'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={(
          <>
            <HeaderPage />
            <HomePage />
            <Footer />
          </>
        )} />
        <Route path='/login' element={(
          <>
            <HeaderPage />
            <LoginPage />
            <Footer />
          </>
        )} />
        <Route path='/Profile' element={
          (
            <>
              <HeaderPage />
              <Profile />
            </>
          )
        } />
        <Route path='/product/:productId' element={
          (<>
            <HeaderPage />
            <ProductDetail />
            <Footer />
          </>)
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
