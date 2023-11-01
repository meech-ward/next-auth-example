import { db, eq, sql } from "@/db"

import { posts as postsTable } from "@/db/schema/posts"
import { users as usersTable } from "@/db/schema/users"
import { media as mediaTable } from "@/db/schema/media"

export const singlePostQuery = db
.select({
  id: postsTable.id,
  content: postsTable.content,
  createdAt: postsTable.createdAt,
  user: {
    id: usersTable.id,
    name: usersTable.name,
    image: usersTable.image,
  },
  media: {
    id: mediaTable.id,
    type: mediaTable.type,
    url: mediaTable.url,
    width: mediaTable.width,
    height: mediaTable.height,
  },
})
.from(postsTable)
.innerJoin(usersTable, eq(usersTable.id, postsTable.userId))
.leftJoin(mediaTable, eq(mediaTable.id, postsTable.mediaId))
.where(eq(postsTable.id, sql.placeholder("id")))
.limit(1)
.prepare("single_post")

export type Post = Awaited<ReturnType<typeof singlePostQuery.execute>>[0]