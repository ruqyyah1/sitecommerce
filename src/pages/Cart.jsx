import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { cartItems, removeFromCart } = useCart()

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="border rounded p-4 flex gap-4 items-center">
              <img src={item.image} alt={item.title} className="w-24 h-32 object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.style} · {item.size}</p>
                <p className="mt-1 font-bold">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <Link to="/checkout">
            <button className="mt-4 bg-black text-white px-6 py-2 rounded">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}
