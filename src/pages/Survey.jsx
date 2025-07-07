import { useState } from 'react'

export default function Survey() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    rating: '',
    comment: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Thank you!</h1>
        <p>Your feedback helps us improve PosterPop 💬</p>
      </div>
    )
  }

  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-semibold mb-4">How was your experience?</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Rating</label>
          <select
            name="rating"
            required
            value={form.rating}
            onChange={handleChange}
            className="w-full border px-3 py-2"
          >
            <option value="">Choose one</option>
            <option value="5">⭐️⭐️⭐️⭐️⭐️ Excellent</option>
            <option value="4">⭐️⭐️⭐️⭐️ Good</option>
            <option value="3">⭐️⭐️⭐️ Average</option>
            <option value="2">⭐️⭐️ Poor</option>
            <option value="1">⭐️ Terrible</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Comments (optional)</label>
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            className="w-full border px-3 py-2"
            rows="3"
            placeholder="What did you like or dislike?"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  )
}
