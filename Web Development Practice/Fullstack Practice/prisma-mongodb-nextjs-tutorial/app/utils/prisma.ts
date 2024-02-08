// this basically makes one instance of your prismaclient the client
// it is the client to the database that is why it is called client
// it stores the client globally so that you only have one client for 
// your whole application and only creates a new one if there isn't 
// already one...
   import { PrismaClient } from "@prisma/client";

    const globalForPrisma = globalThis as unknown as {
        prisma: PrismaClient | undefined
    }

    export const prisma = globalForPrisma.prisma ?? new PrismaClient()

    if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;