import FeedPost from "@/components/feed-post"

import { users as usersTable } from "@/db/schema/users"
import { db, eq, sql } from "@/db"
import { userPostsQuery } from "@/db/queries/postsFeed"

import Profile from "./profile"

export default async function ProfilePage() {
  const userId = "user-1"

  const user = await db.select().from(usersTable).where(eq(usersTable.id, userId)).then(res => res[0])
  const posts = await userPostsQuery.execute({ userId: user.id })

  return (
    <>
      <Profile user={user} />

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
