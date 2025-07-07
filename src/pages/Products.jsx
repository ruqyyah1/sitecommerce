import { useState } from 'react'
import products from '../data/products'
import { useCart } from '../context/CartContext'

export default function Products() {
  const [selectedStyle, setSelectedStyle] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedTheme, setSelectedTheme] = useState('')

  const { addToCart } = useCart()


  const filtered = products.filter(p =>
    (!selectedStyle || p.style === selectedStyle) &&
    (!selectedSize || p.size === selectedSize) &&
    (!selectedTheme || p.theme === selectedTheme)
  )

  const clearFilters = () => {
    setSelectedStyle('')
    setSelectedSize('')
    setSelectedTheme('')
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar */}
      <div className="lg:w-1/4 space-y-4">
        <h2 className="text-xl font-semibold">Filter</h2>

        <div>
          <label className="block font-medium">Style</label>
          <select
            value={selectedStyle}
            onChange={e => setSelectedStyle(e.target.value)}
            className="w-full border p-1"
          >
            <option value="">All</option>
            <option>Minimalist</option>
            <option>Anime</option>
            <option>Vintage</option>
            <option>Abstract</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Size</label>
          <select
            value={selectedSize}
            onChange={e => setSelectedSize(e.target.value)}
            className="w-full border p-1"
          >
            <option value="">All</option>
            <option>A4</option>
            <option>A3</option>
            <option>A2</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Theme</label>
          <select
            value={selectedTheme}
            onChange={e => setSelectedTheme(e.target.value)}
            className="w-full border p-1"
          >
            <option value="">All</option>
            <option>Nature</option>
            <option>Quotes</option>
            <option>Pop Culture</option>
          </select>
        </div>

        <button
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {filtered.map(product => (
          <div key={product.id} className="border rounded shadow-sm">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-t" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.style} · {product.size} · {product.theme}</p>
              <p className="mt-2 font-bold">${product.price}</p>
              <button
                className="mt-2 bg-black text-white px-4 py-1 text-sm rounded hover:bg-gray-800"
                onClick={() => addToCart(product)}
              >
                Add to Cart
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
