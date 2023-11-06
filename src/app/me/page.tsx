import FeedPost from "@/components/feed-post"

import { users as usersTable } from "@/db/schema/users"
import { db, eq, sql } from "@/db"
import { userPostsQuery } from "@/db/queries/postsFeed"

import Profile from "./profile"

import { auth, signOut } from "@/auth"

import { redirect } from "next/navigation"

import SignoutButton from "./sign-out-button"

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/me")
  }

  const posts = await userPostsQuery.execute({ userId: session.user.id })

  return (
    <>
      <Profile user={session.user} />

        <SignoutButton
          signOut={async () => {
            "use server"
            await signOut({redirectTo: "/"})
          }}
        />
      <div className="mt-7">
        <div className="w-full border-b mb-5">
          <div className="mb-2">Posts</div>
        </div>
        <div className="flex flex-col divide-y">
          {posts?.map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}
