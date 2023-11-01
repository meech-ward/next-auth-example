"use client"

import { twMerge } from "tailwind-merge"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

export default function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className={twMerge(
        "border rounded-xl px-4 py-2 disabled",
        pending && 'opacity-50 cursor-not-allowed'
        )}
      disabled={pending}
      aria-disabled={pending}
    >
      Post
    </button>
  )
}