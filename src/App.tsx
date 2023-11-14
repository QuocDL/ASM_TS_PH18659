import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage'
import HeaderPage from './pages/components/header.tsx'
import Footer from './pages/components/footer'
import LoginPage from './pages/login'
import Profile from './pages/profile'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={(
        <>
          <HeaderPage/>
          <HomePage/>
          <Footer/>
        </>
    )}/>
      <Route path='/login' element={(
        <>
          <HeaderPage />
          <LoginPage />
          <Footer />
        </>
      )}/>
      <Route path='/Profile' element={
        (
          <>
            <HeaderPage/>
            <Profile />
          </>
        )
      }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
