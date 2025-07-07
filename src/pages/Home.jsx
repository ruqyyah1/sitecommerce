import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-bold">Welcome to PosterPop!</h1>
      <p className="text-lg text-gray-600">
        Discover modern, vintage, and aesthetic posters to decorate your space.
      </p>

      <Link to="/products">
        <button className="mt-4 bg-black text-white px-6 py-3 text-lg rounded hover:bg-gray-800 transition">
          Shop Now
        </button>
      </Link>
    </div>
  )
}
