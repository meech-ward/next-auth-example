import CreatePostForm from "@/app/create/create-post-form"

import { db, eq } from "@/db"
import { users as usersTable } from "@/db/schema/users"

import { auth } from "@/auth"

import { redirect } from "next/navigation"

import { createPost } from "./actions"

export default async function Create() {
  const session = await auth()
  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/create")
  }

  return <CreatePostForm user={session.user} createPost={createPost} />
}
