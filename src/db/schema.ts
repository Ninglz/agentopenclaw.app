import * as authSchema from './auth.schema';
import * as appSchema from './app.schema';
import * as skillsSchema from './skills.schema';

/**
 * Re-export all tables so drizzle-kit can discover them when reading this file.
 * https://orm.drizzle.team/docs/drizzle-kit-generate
 */
export * from './auth.schema';
export * from './app.schema';
export * from './skills.schema';

export const schema = {
  ...authSchema,
  ...appSchema,
  ...skillsSchema,
} as const;
