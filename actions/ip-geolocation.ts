"use server"

// Interface for geolocation data
export interface GeolocationData {
  ip: string
  city?: string
  region?: string
  country_name?: string
  country_code?: string
  postal?: string
  latitude?: number
  longitude?: number
  timezone?: string
  org?: string // ISP or organization
  error?: boolean
  reason?: string
}

/**
 * Get geolocation data for an IP address
 * Uses the free ipapi.co service (limited to 1000 requests per day)
 */
export async function getIpGeolocation(ip: string): Promise<GeolocationData> {
  // Don't try to look up invalid or local IPs
  if (
    !ip ||
    ip === "unknown" ||
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip.startsWith("192.168.") ||
    ip.startsWith("10.")
  ) {
    return {
      ip,
      error: true,
      reason: "Local or invalid IP address",
    }
  }

  try {
    // Use ipapi.co for geolocation (free tier, no API key required)
    const response = await fetch(`https://ipapi.co/${ip}/json/`, {
      headers: {
        "User-Agent": "AnnaStudio/1.0",
      },
      next: {
        revalidate: 86400, // Cache for 24 hours
      },
    })

    if (!response.ok) {
      throw new Error(`Geolocation API error: ${response.status}`)
    }

    const data = await response.json()

    // Check if the API returned an error
    if (data.error) {
      return {
        ip,
        error: true,
        reason: data.reason || "Unknown API error",
      }
    }

    return {
      ip,
      city: data.city,
      region: data.region,
      country_name: data.country_name,
      country_code: data.country_code,
      postal: data.postal,
      latitude: data.latitude,
      longitude: data.longitude,
      timezone: data.timezone,
      org: data.org,
    }
  } catch (error) {
    console.error("Error fetching geolocation data:", error)
    return {
      ip,
      error: true,
      reason: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

/**
 * Format geolocation data into a human-readable string
 */
export async function formatGeolocation(geoData: GeolocationData): Promise<{
  text: string
  mapsLink: string | null
}> {
  if (geoData.error) {
    return {
      text: `Locatie niet beschikbaar (${geoData.reason || "onbekende fout"})`,
      mapsLink: null,
    }
  }

  const parts = []

  // Add city and region if available
  if (geoData.city) {
    parts.push(geoData.city)

    if (geoData.region && geoData.region !== geoData.city) {
      parts.push(geoData.region)
    }
  } else if (geoData.region) {
    parts.push(geoData.region)
  }

  // Add country if available
  if (geoData.country_name) {
    parts.push(geoData.country_name)
  }

  // If we have coordinates, create a Google Maps link
  let mapsLink = ""
  if (geoData.latitude !== undefined && geoData.longitude !== undefined) {
    mapsLink = `https://www.google.com/maps?q=${geoData.latitude},${geoData.longitude}`
  }

  // Format the location string
  const locationStr = parts.length > 0 ? parts.join(", ") : "Onbekende locatie"

  // Add ISP/organization if available
  const orgStr = geoData.org ? ` (ISP: ${geoData.org})` : ""

  return {
    text: `${locationStr}${orgStr}`,
    mapsLink: mapsLink || null,
  }
}
