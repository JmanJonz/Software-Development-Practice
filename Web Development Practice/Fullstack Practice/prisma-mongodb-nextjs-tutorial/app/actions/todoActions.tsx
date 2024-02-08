"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/app/utils/prisma"

export async function create(formData: FormData) {
    const input = formData.get("input") as string

    await prisma.todo.create({
        data: {
            title: input
        }
    })
    
}
