"use server"

import { z } from "zod"
import { headers } from "next/headers"
import { isIpBlocked } from "./ip-blocklist"
import { getIpGeolocation, formatGeolocation } from "./ip-geolocation"
import { sql } from "@vercel/postgres"

// Email validation schema
const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
})

type ContactData = z.infer<typeof contactSchema>

function getClientInfo() {
  const headersList = headers()

  const forwardedFor = headersList.get("x-forwarded-for")
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : headersList.get("x-real-ip") || "unknown"
  const userAgent = headersList.get("user-agent") || "unknown"

  // Parse user agent for better device information
  let deviceInfo = "Unknown device"
  if (userAgent.includes("iPhone")) deviceInfo = "iPhone"
  else if (userAgent.includes("iPad")) deviceInfo = "iPad"
  else if (userAgent.includes("Android")) deviceInfo = "Android device"
  else if (userAgent.includes("Macintosh")) deviceInfo = "Mac computer"
  else if (userAgent.includes("Windows")) deviceInfo = "Windows computer"
  else if (userAgent.includes("Linux")) deviceInfo = "Linux computer"

  let browserInfo = "Unknown browser"
  if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) browserInfo = "Google Chrome"
  else if (userAgent.includes("Firefox")) browserInfo = "Mozilla Firefox"
  else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) browserInfo = "Safari"
  else if (userAgent.includes("Edg")) browserInfo = "Microsoft Edge"

  const timestamp = new Date()
  const isoTimestamp = timestamp.toISOString()
  const localTimestamp = timestamp.toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })

  return {
    ip,
    rawUserAgent: userAgent,
    deviceInfo,
    browserInfo,
    isoTimestamp,
    localTimestamp,
  }
}

export async function logContactMessage(data: ContactData) {
  try {
    const clientInfo = getClientInfo()

    // Check if the IP is blocked
    if (isIpBlocked(clientInfo.ip)) {
      console.log(`[v0] Blocked contact attempt from IP: ${clientInfo.ip}`)
      return {
        success: false,
        message: "Je bericht kon niet worden verzonden.",
      }
    }

    // Get geolocation data
    const geoData = await getIpGeolocation(clientInfo.ip)
    const formattedGeo = await formatGeolocation(geoData)

    // Validate the contact data
    const validatedData = contactSchema.parse(data)

    await sql`
      INSERT INTO contact_messages (
        name,
        email,
        subject,
        message,
        ip_address,
        user_agent,
        geolocation,
        device_info,
        browser_info,
        created_at,
        status
      ) VALUES (
        ${validatedData.name},
        ${validatedData.email},
        ${validatedData.subject},
        ${validatedData.message},
        ${clientInfo.ip},
        ${clientInfo.rawUserAgent},
        ${formattedGeo.text},
        ${clientInfo.deviceInfo},
        ${clientInfo.browserInfo},
        NOW(),
        'unread'
      )
    `

    console.log("[v0] Contact message logged to database")
    return { success: true }
  } catch (error) {
    console.error("[v0] Error logging contact message:", error)
    throw error
  }
}

// Helper function to format the eigen traject form data into HTML
export async function formatEigenTrajectFormToHtml(formData: {
  name: string
  email: string
  subject: string
  helpWith: string
  aboutYou: string
  message?: string
}) {
  return `
    <h2>Nieuw Eigen Traject aanvraag</h2>
    <p><strong>Naam:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Onderwerp:</strong> ${formData.subject}</p>
    <p><strong>Hulp bij:</strong> ${formData.helpWith}</p>
    <p><strong>Over de persoon:</strong></p>
    <p>${formData.aboutYou.replace(/\n/g, "<br>")}</p>
    ${formData.message ? `<p><strong>Aanvullende informatie:</strong></p><p>${formData.message.replace(/\n/g, "<br>")}</p>` : ""}
  `
}

// Helper function to format contact form data into HTML
export async function formatContactFormToHtml(formData: {
  name: string
  email: string
  subject: string
  message: string
  [key: string]: string
}) {
  return `
    <h2>Nieuw contactformulier bericht</h2>
    <p><strong>Naam:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Onderwerp:</strong> ${formData.subject}</p>
    <p><strong>Bericht:</strong></p>
    <p>${formData.message.replace(/\n/g, "<br>")}</p>
  `
}

export async function sendEmail(data: {
  to?: string
  cc?: string
  subject: string
  html: string
  replyTo?: string
}) {
  try {
    console.log("[v0] sendEmail called with:", { to: data.to, subject: data.subject, replyTo: data.replyTo })

    const nodemailer = await import("nodemailer")

    const STRATO_EMAIL = process.env.STRATO_EMAIL
    const STRATO_PASSWORD = process.env.STRATO_PASSWORD

    console.log("[v0] STRATO_EMAIL configured:", !!STRATO_EMAIL)
    console.log("[v0] STRATO_PASSWORD configured:", !!STRATO_PASSWORD)

    if (!STRATO_EMAIL || !STRATO_PASSWORD) {
      console.error("[v0] ERROR: Strato credentials not configured")
      return { success: false, message: "Email service not configured" }
    }

    const transporter = nodemailer.default.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true,
      auth: {
        user: STRATO_EMAIL,
        pass: STRATO_PASSWORD,
      },
    })

    console.log("[v0] Transporter created, sending email...")
    console.log("[v0] From: noreply@annastudio.nl")
    console.log("[v0] To: annastrijbos11@gmail.com")
    console.log("[v0] BCC: noreply@annastudio.nl")

    const info = await transporter.sendMail({
      from: "noreply@annastudio.nl",
      to: data.to || "annastrijbos11@gmail.com",
      cc: data.cc,
      bcc: "noreply@annastudio.nl",
      subject: data.subject,
      html: data.html,
      replyTo: data.replyTo,
    })

    console.log("[v0] SUCCESS: Email sent! Message ID:", info.messageId)
    return { success: true, message: "Message sent", messageId: info.messageId }
  } catch (error: any) {
    console.error("[v0] ERROR sending email:", error.message)
    console.error("[v0] Full error:", error)
    return { success: false, message: error.message || "Failed to send email" }
  }
}
