import Image from "next/image"
import Link from "next/link"
import { type Post } from "@/db/queries/singlePost"
import PostActions from "./post-actions"

import timeAgoShort from "@/utils/timeAgoShort"

export default function SinglePost({ post }: { post: Post }) {
  function postMedia() {
    if (!post.media) {
      return null
    }
    if (post.media.type === "image") {
      return (
        <Link href={post.media.url}>
          <Image
            src={post.media.url}
            alt={post.content}
            width={post.media.width}
            height={post.media.height}
            className="rounded-xl"
          />
        </Link>
      )
    }
  }

  return (
    <article className="flex flex-col gap-2 py-2">
      <div className="flex gap-4 items-start">
        <Link href={`/${post.user.id}`}>
          <div className="rounded-full h-10 w-10 overflow-hidden relative">
            <Image
              className="object-cover"
              src={post.user.image || "https://www.gravatar.com/avatar/?d=mp"}
              alt={post.user.name || "User image"}
              priority={true}
              fill={true}
            />
          </div>
        </Link>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex justify-between">
            <Link href={`/${post.user.id}`}>
              <div>{post.user.name}</div>
            </Link>
            <p className="dark:text-neutral-400 text-neutral-600">
              {timeAgoShort(new Date(post.createdAt))}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 pb-2">
        <p className="font-light">{post.content}</p>
        {postMedia()}
        <PostActions />
      </div>

      <div className="flex gap-2 dark:text-neutral-400 text-neutral-600">
        {/* <p>{post.likes} likes</p> */}
        <p>·</p>
        {/* <p>{post.replies} replies</p> */}
      </div>
    </article>
  )
}
