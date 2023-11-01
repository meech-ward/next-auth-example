import { pgTable, text } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  username: text("username").notNull().unique(),
  image: text("image"),
})
