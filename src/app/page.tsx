import FeedPost from "@/components/feed-post"

import { postsFeedQuery } from "@/db/queries/postsFeed"

export default async function Home() {
  const posts = await postsFeedQuery.execute()

  return (
    <div className="flex flex-col divide-y" style={{ height: 3000 }}>
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </div>
  )
}
