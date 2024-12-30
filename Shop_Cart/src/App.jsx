import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/HomePage'
import Cart from './pages/CartPage'
import Header from './components/Header/Header'

function App() {
  return (
    <>
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
    </>
  )
}

export default App
