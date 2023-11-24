import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage.tsx'
import HeaderPage from './pages/components/Header.tsx'
import Footer from './pages/components/Footer.tsx'
import LoginPage from './pages/Login.tsx'
import Profile from './pages/components/Profile.tsx'
import ProductDetail from './pages/ProductDetail.tsx'

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
