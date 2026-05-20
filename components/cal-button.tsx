"use client"

import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"

interface CalButtonProps {
  children: React.ReactNode
  className?: string
  eventSlug?: string
}

export function CalButton({ children, className, eventSlug = "30min" }: CalButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#008194" } },
        hideEventTypeDetails: false,
      })
    })()
  }, [])

  return (
    <button
      type="button"
      data-cal-link={`anna-eeivto/${eventSlug}`}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  )
}
