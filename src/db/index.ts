import { neon, neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

// neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DATABASE_URL!);
// export const db = drizzle(sql);
export const db = drizzle(sql, { logger: true });


export * from 'drizzle-orm'