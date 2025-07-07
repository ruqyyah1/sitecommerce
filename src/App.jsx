import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Survey from './pages/Survey'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black text-white p-6 text-3xl font-bold">
        <Link to="/">PosterPop</Link>
      </header>
      <nav className="bg-gray-100 text-sm flex gap-4 px-6 py-2">
        <Link to="/">Home</Link>
        <Link to="/products">Posters</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </main>
      <footer className="bg-gray-100 text-center text-sm py-4">
        &copy; {new Date().getFullYear()} PosterPop. All rights reserved.
      </footer>
    </div>
  )
}
