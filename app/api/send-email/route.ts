import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

export async function GET(request: NextRequest) {
  console.log("[v0] API Route: GET request received (not allowed)")
  return NextResponse.json({ success: false, error: "Use POST method" }, { status: 405 })
}

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] === API ROUTE START ===")

    const body = await request.json()
    console.log("[v0] Request received:", { from: body.from, to: body.to, subject: body.subject })

    const { from, to, bcc, subject, html, replyTo } = body

    const STRATO_EMAIL = process.env.STRATO_EMAIL
    const STRATO_PASSWORD = process.env.STRATO_PASSWORD

    if (!STRATO_EMAIL || !STRATO_PASSWORD) {
      console.error("[v0] ERROR: STRATO credentials not configured")
      return NextResponse.json(
        { success: false, error: "Email service not configured - missing STRATO_EMAIL or STRATO_PASSWORD" },
        { status: 500 },
      )
    }

    console.log("[v0] Creating STRATO SMTP transporter...")
    const transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true,
      auth: {
        user: STRATO_EMAIL,
        pass: STRATO_PASSWORD,
      },
    })

    console.log("[v0] Sending email via STRATO SMTP...")
    console.log("[v0] From:", from)
    console.log("[v0] To:", to)
    console.log("[v0] BCC: noreply@annastudio.nl")

    const mailOptions = {
      from,
      to,
      cc,
      bcc: "noreply@annastudio.nl",
      subject,
      html,
      replyTo,
    }

    const info = await transporter.sendMail(mailOptions)

    console.log("[v0] SUCCESS: Email sent via STRATO SMTP")
    console.log("[v0] Message ID:", info.messageId)

    return NextResponse.json({ success: true, messageId: info.messageId })
  } catch (error: any) {
    console.error("[v0] ERROR:", error.message)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
