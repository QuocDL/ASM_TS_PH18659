import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage.tsx'
import HeaderPage from './pages/components/header.tsx'
import Footer from './pages/components/footer.tsx'
import LoginPage from './pages/login.tsx'
import Profile from './pages/components/profile.tsx'
import ProductDetail from './pages/productdetail.tsx'

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
