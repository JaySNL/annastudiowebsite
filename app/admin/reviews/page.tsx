"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

type Review = {
  id: number
  name: string
  service: "schrijfcursus" | "manuscriptbeoordeling"
  rating: number
  text: string
  avatar: string
}

export default function AdminReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Simple password authentication
  const handleAuthenticate = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace 'your-admin-password' with an actual password
    if (password === "your-admin-password") {
      setIsAuthenticated(true)
      localStorage.setItem("admin-authenticated", "true")
    } else {
      setMessage({ type: "error", text: "Incorrect password" })
    }
  }

  // Check if already authenticated
  useEffect(() => {
    const isAuth = localStorage.getItem("admin-authenticated") === "true"
    setIsAuthenticated(isAuth)
  }, [])

  // Fetch reviews
  useEffect(() => {
    if (!isAuthenticated) return

    async function fetchReviews() {
      try {
        const response = await fetch("/data/reviews.json")
        if (!response.ok) {
          throw new Error("Failed to fetch reviews")
        }
        const data = await response.json()
        setReviews(data)
      } catch (error) {
        console.error("Error loading reviews:", error)
        setMessage({ type: "error", text: "Failed to load reviews" })
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [isAuthenticated])

  // This is just a mock function since we can't actually write to the file system from the browser
  // In a real implementation, you would need a server endpoint to handle this
  const handleSaveReviews = () => {
    // In a real implementation, this would send the data to a server endpoint
    // that would write to the JSON file
    console.log("Reviews to save:", reviews)
    setMessage({
      type: "success",
      text: "This is a demo. In a real implementation, this would save to the server.",
    })

    // Mock successful save
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6">Admin Login</h1>

            {message && (
              <div
                className={`p-4 mb-4 rounded-md ${message.type === "error" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleAuthenticate} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90">
                Login
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Manage Reviews</h1>
          <button
            onClick={handleSaveReviews}
            className="py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Save Changes
          </button>
        </div>

        {message && (
          <div
            className={`p-4 mb-6 rounded-md ${message.type === "error" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
          >
            {message.text}
          </div>
        )}

        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <p className="text-muted-foreground mb-4">
            <strong>Note:</strong> This is a demo admin interface. In a real implementation, you would need a server
            endpoint to save changes to the JSON file.
          </p>
          <p className="text-muted-foreground">
            For now, you can edit the reviews below, but changes won't be saved permanently. To actually update reviews,
            edit the <code className="bg-muted px-1 py-0.5 rounded">public/data/reviews.json</code> file directly.
          </p>
        </div>

        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={review.id} className="bg-card border border-border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    value={review.name}
                    onChange={(e) => {
                      const updatedReviews = [...reviews]
                      updatedReviews[index].name = e.target.value
                      setReviews(updatedReviews)
                    }}
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Service</label>
                  <select
                    value={review.service}
                    onChange={(e) => {
                      const updatedReviews = [...reviews]
                      updatedReviews[index].service = e.target.value as "schrijfcursus" | "manuscriptbeoordeling"
                      setReviews(updatedReviews)
                    }}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="schrijfcursus">Schrijfcursus</option>
                    <option value="manuscriptbeoordeling">Manuscriptbeoordeling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Rating (1-5)</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={review.rating}
                    onChange={(e) => {
                      const updatedReviews = [...reviews]
                      updatedReviews[index].rating = Math.min(5, Math.max(1, Number.parseInt(e.target.value) || 1))
                      setReviews(updatedReviews)
                    }}
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Avatar URL</label>
                  <input
                    type="text"
                    value={review.avatar}
                    onChange={(e) => {
                      const updatedReviews = [...reviews]
                      updatedReviews[index].avatar = e.target.value
                      setReviews(updatedReviews)
                    }}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Review Text</label>
                <textarea
                  value={review.text}
                  onChange={(e) => {
                    const updatedReviews = [...reviews]
                    updatedReviews[index].text = e.target.value
                    setReviews(updatedReviews)
                  }}
                  rows={4}
                  className="w-full p-2 border rounded-md"
                ></textarea>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => {
                    const updatedReviews = reviews.filter((_, i) => i !== index)
                    setReviews(updatedReviews)
                  }}
                  className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={() => {
              const newId = Math.max(0, ...reviews.map((r) => r.id)) + 1
              setReviews([
                ...reviews,
                {
                  id: newId,
                  name: "Nieuwe Recensie",
                  service: "schrijfcursus",
                  rating: 5,
                  text: "Voeg hier de recensietekst toe.",
                  avatar: "/placeholder.svg?height=80&width=80",
                },
              ])
            }}
            className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Add New Review
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
