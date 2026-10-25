import { pgTable, text, timestamp, boolean, uuid } from "drizzle-orm/pg-core";

export const links = pgTable("links", {
  id: uuid("id").defaultRandom().primaryKey(),
  url: text("url").notNull(),
  title: text("title"),
  description: text("description"),
  posterUrl: text("poster_url"), // R2 se aane wala WebP URL
  category: text("category").default("Misc"),
  isStarred: boolean("is_starred").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
