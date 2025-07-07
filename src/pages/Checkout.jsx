import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const { cartItems, setCartItems } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    card: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setCartItems([]) // clear cart
  }

  if (submitted) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Thank you!</h1>
        <p>Your order has been placed.</p>
        <p className="mt-2 text-sm text-gray-500">We'll email you at {form.email}</p>
        <button
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
          onClick={() => navigate('/survey')}
        >
          Give Feedback
        </button>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Go add some posters!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium">Shipping Address</label>
            <input
              type="text"
              name="address"
              required
              value={form.address}
              onChange={handleChange}
              className="w-full border px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium">Card Info</label>
            <input
              type="text"
              name="card"
              placeholder="1234 5678 9012 3456"
              required
              value={form.card}
              onChange={handleChange}
              className="w-full border px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  )
}
