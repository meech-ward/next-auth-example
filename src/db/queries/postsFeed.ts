import { db, eq, sql, desc } from "@/db"

import { posts as postsTable } from "@/db/schema/posts"
import { users as usersTable } from "@/db/schema/users"
import { media as mediaTable } from "@/db/schema/media"

const baseQuery = db
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

export const postsFeedQuery = baseQuery
  .orderBy(desc(postsTable.createdAt))
  .prepare("posts_for_feed")

export const postResponsesQuery = baseQuery
  .where(eq(postsTable.replyId, sql.placeholder("id")))
  .orderBy(desc(postsTable.createdAt))
  .prepare("posts_for_post_response_feed")

export const userPostsQuery = baseQuery
  .where(eq(usersTable.id, sql.placeholder("userId")))
  .orderBy(desc(postsTable.createdAt))
  .prepare("posts_for_user_feed")

export type Post = Awaited<ReturnType<typeof postsFeedQuery.execute>>[0]
