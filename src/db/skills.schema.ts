import { boolean, integer, numeric, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import crypto from 'crypto';

export const skills = pgTable('skills', {
  id: varchar('id', { length: 128 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  slug: varchar('slug', { length: 128 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  category: varchar('category', { length: 128 }).notNull(),
  author: varchar('author', { length: 128 }).notNull(),
  downloads: integer('downloads').default(0),
  rating: numeric('rating', { precision: 3, scale: 1 }).default('0.0'),
  command: varchar('command', { length: 255 }).notNull(),
  isProOnly: boolean('is_pro_only').default(false).notNull(),
  icon: varchar('icon', { length: 64 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
