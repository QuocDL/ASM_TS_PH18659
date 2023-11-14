import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage'
import Header from './pages/components/Header'
import Footer from './pages/components/footer'
import LoginPage from './pages/login'
import Profile from './pages/profile'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={(
        <>
          <Header/>
          <HomePage/>
          <Footer/>
        </>
    )}/>
      <Route path='/login' element={(
        <>
          <Header />
          <LoginPage />
          <Footer />
        </>
      )}/>
      <Route path='/Profile' element={
        (
          <>
            <Header/>
            <Profile />
          </>
        )
      }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
