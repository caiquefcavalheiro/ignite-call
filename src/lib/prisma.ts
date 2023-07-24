import { PrismaClient } from '@prisma/client'

// a partir da instância ele lê o arquivo .env
export const prisma = new PrismaClient({ log: ['query'] })
