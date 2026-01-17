"use client"

import { useState, useEffect } from "react"

interface SimpleCaptchaProps {
  onValidationChange: (isValid: boolean) => void
}

export function SimpleCaptcha({ onValidationChange }: SimpleCaptchaProps) {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [hasAttempted, setHasAttempted] = useState(false)

  // Generate new captcha numbers
  const generateCaptcha = () => {
    setFirstNumber(Math.floor(Math.random() * 10))
    setSecondNumber(Math.floor(Math.random() * 10))
    setUserAnswer("")
    setIsValid(false)
    setHasAttempted(false)
  }

  // Initialize captcha on component mount
  useEffect(() => {
    generateCaptcha()
  }, [])

  // Validate user's answer
  const validateAnswer = (value: string) => {
    setUserAnswer(value)
    const numericValue = Number.parseInt(value, 10)
    const correctAnswer = firstNumber + secondNumber

    const valid = !isNaN(numericValue) && numericValue === correctAnswer
    setIsValid(valid)
    setHasAttempted(true)
    onValidationChange(valid)
  }

  return (
    <div className="space-y-2">
      <label htmlFor="captcha" className="block text-sm font-medium text-card-foreground">
        Anti-spam verificatie <span className="text-primary">*</span>
      </label>

      <div className="flex items-center gap-2">
        <span className="text-card-foreground">
          {firstNumber} + {secondNumber} =
        </span>
        <input
          type="number"
          id="captcha"
          value={userAnswer}
          onChange={(e) => validateAnswer(e.target.value)}
          className="py-2 px-3 block w-20 border-border rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none bg-card text-card-foreground"
          placeholder="?"
          required
        />
        <button
          type="button"
          onClick={generateCaptcha}
          className="p-2 text-sm text-primary hover:text-primary/80"
          aria-label="Generate new captcha"
        >
          ↻
        </button>
      </div>

      {hasAttempted && !isValid && (
        <p className="text-sm text-red-500 dark:text-red-400">Onjuist antwoord, probeer opnieuw.</p>
      )}
    </div>
  )
}
