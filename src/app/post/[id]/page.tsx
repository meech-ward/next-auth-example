import SinglePost from "@/components/single-post"
import FeedPost from "@/components/feed-post"

import { notFound } from "next/navigation"

import { singlePostQuery } from "@/db/queries/singlePost"
import { postResponsesQuery } from "@/db/queries/postsFeed"
import { mightFail } from "might-fail"

export default async function Post({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  if (Number.isNaN(id)) {
    notFound()
  }

  const { result: post, error: getPostError } = await mightFail(
    singlePostQuery.execute({ id }).then((result) => result[0])
  )
  if (getPostError) {
    console.error(getPostError)
    return <div>error connecting to database</div>
  }
  if (!post) {
    notFound()
  }

  const { result: postResponses, error: getPostResponsesError } = await mightFail(
    postResponsesQuery.execute({ id })
  )

  if (getPostResponsesError) {
    console.error(getPostError)
    return <div>error connecting to database</div>
  }
  if (!postResponses) {
    notFound()
  }

  return (
    <div className="flex flex-col divide-y">
      <SinglePost post={post} />
      {postResponses.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </div>
  )
}
