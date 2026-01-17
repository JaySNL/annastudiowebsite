"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getIpGeolocation } from "@/actions/ip-geolocation"

interface BlockedIp {
  ip: string
  location?: string
  dateAdded: string
  reason?: string
}

export default function AdminIpBlocklist() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [blockedIps, setBlockedIps] = useState<BlockedIp[]>([])
  const [newIp, setNewIp] = useState("")
  const [newReason, setNewReason] = useState("")
  const [isLoading, setIsLoading] = useState(false)

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

  // Mock function to load blocked IPs
  // In a real implementation, this would fetch from an API or database
  useEffect(() => {
    if (!isAuthenticated) return

    setIsLoading(true)
    // This is a mock implementation
    // In a real app, you would fetch this from your backend
    const mockBlockedIps: BlockedIp[] = [
      {
        ip: "192.168.1.1",
        location: "Local Network",
        dateAdded: new Date().toISOString(),
        reason: "Testing",
      },
      {
        ip: "10.0.0.1",
        location: "Internal Network",
        dateAdded: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        reason: "Suspicious activity",
      },
    ]

    setBlockedIps(mockBlockedIps)
    setIsLoading(false)
  }, [isAuthenticated])

  // Function to look up IP location
  const lookupIpLocation = async (ip: string) => {
    try {
      const geoData = await getIpGeolocation(ip)
      if (geoData.error) {
        return "Location unavailable"
      }

      // We're implementing our own formatting here rather than using formatGeolocation
      // to keep the admin interface simpler
      const parts = []
      if (geoData.city) parts.push(geoData.city)
      if (geoData.country_name) parts.push(geoData.country_name)

      return parts.length > 0 ? parts.join(", ") : "Unknown location"
    } catch (error) {
      console.error("Error looking up IP location:", error)
      return "Error looking up location"
    }
  }

  // Mock function to add an IP to the blocklist
  const handleAddIp = async () => {
    if (!newIp) return

    // Validate IP format (simple validation)
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/
    if (!ipRegex.test(newIp)) {
      setMessage({ type: "error", text: "Invalid IP address format" })
      return
    }

    // Check if IP is already in the list
    if (blockedIps.some((item) => item.ip === newIp)) {
      setMessage({ type: "error", text: "This IP is already blocked" })
      return
    }

    setIsLoading(true)

    // Look up location for the IP
    const location = await lookupIpLocation(newIp)

    // Add IP to the list (in a real app, this would call an API)
    setBlockedIps([
      ...blockedIps,
      {
        ip: newIp,
        location,
        dateAdded: new Date().toISOString(),
        reason: newReason || "Manual block",
      },
    ])

    setNewIp("")
    setNewReason("")
    setMessage({ type: "success", text: "IP address added to blocklist" })
    setIsLoading(false)

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage(null)
    }, 3000)
  }

  // Mock function to remove an IP from the blocklist
  const handleRemoveIp = (ip: string) => {
    // Remove IP from the list (in a real app, this would call an API)
    setBlockedIps(blockedIps.filter((blockedIp) => blockedIp.ip !== ip))
    setMessage({ type: "success", text: "IP address removed from blocklist" })

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage(null)
    }, 3000)
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">IP Blocklist Management</h1>

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
              endpoint to save changes to the blocklist.
            </p>
            <p className="text-muted-foreground">
              For now, you can add and remove IPs below, but changes won't be saved permanently when you refresh the
              page.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Add IP to Blocklist</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="ip-address" className="block text-sm font-medium mb-1">
                  IP Address
                </label>
                <input
                  type="text"
                  id="ip-address"
                  value={newIp}
                  onChange={(e) => setNewIp(e.target.value)}
                  placeholder="Enter IP address (e.g., 192.168.1.1)"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="block-reason" className="block text-sm font-medium mb-1">
                  Reason (optional)
                </label>
                <input
                  type="text"
                  id="block-reason"
                  value={newReason}
                  onChange={(e) => setNewReason(e.target.value)}
                  placeholder="Reason for blocking this IP"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <button
                onClick={handleAddIp}
                className="py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? "Adding..." : "Add IP"}
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Current Blocked IPs</h2>
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : blockedIps.length === 0 ? (
              <p className="text-muted-foreground">No IPs are currently blocked.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        IP Address
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Date Added
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Reason
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {blockedIps.map((ip) => (
                      <tr key={ip.ip} className="hover:bg-muted/50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{ip.ip}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{ip.location || "Unknown"}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          {new Date(ip.dateAdded).toLocaleString("nl-NL")}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{ip.reason || "Not specified"}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-right">
                          <button
                            onClick={() => handleRemoveIp(ip.ip)}
                            className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
