"use server"

import { z } from "zod"
import { action } from "@/utils/safe-action"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

import { db, sql } from "@/db"
import { posts as postsTable } from "@/db/schema/posts"
import { users as usersTable } from "@/db/schema/users"

const CreateSchema = z.object({
  content: z.string(),
})
type CreateSchema = z.infer<typeof CreateSchema>
export const createPost = action(CreateSchema, _createPost)

async function _createPost({ content }: CreateSchema) {
  const userId = "user-1"


  if (content.length < 3) {
    return { message: "not enough content" }
  }

  await db.insert(postsTable).values({
    content,
    userId,
  })

  revalidatePath('/')
  redirect('/')
}
