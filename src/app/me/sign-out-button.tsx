"use client"

export default function SignoutButton({signOut} : {signOut: () => void}) {
  return (
    <button
      className="text-neutral-500 hover:text-neutral-700"
      onClick={() => {
        signOut()
      }}
    >
      Sign out
    </button>
  )
}