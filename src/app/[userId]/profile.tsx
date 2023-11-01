import Image from "next/image"
import Link from "next/link"

export default async function Profile({
  user,
}: {
  user: {
    name?: string | null
    image?: string | null
  }
}) {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-3xl font-semibold">{user.name}</h2>
      </div>
      <Link href={user.image || "https://www.gravatar.com/avatar/?d=mp"}>
        <div className="rounded-full h-20 w-20 overflow-hidden relative">
          <Image
            className="object-cover"
            src={user.image || "https://www.gravatar.com/avatar/?d=mp"}
            alt={user.name || "User image"}
            quality={100}
            priority={true}
            fill={true}
          />
        </div>
      </Link>
    </div>
  )
}
