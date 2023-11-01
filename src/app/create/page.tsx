import CreatePostForm from "@/app/create/create-post-form"

import { db, eq } from "@/db"
import { users as usersTable } from "@/db/schema/users"

export default async function Create() {
  const userId = "user-1"

  const user = await db.select().from(usersTable).where(eq(usersTable.id, userId)).then(res => res[0])
  
  return <CreatePostForm user={user} />
}
