import { logger } from "@/utils/logger"
import { prisma } from "@/utils/prisma"
import argon from "argon2"
import z from "zod"

export const registerSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
})

export async function register(name: string, email: string, password: string) {
    const inputValidation = registerSchema.safeParse({
        name,
        email,
        password,
    })

    if (!inputValidation.success) {
        throw new Error("Invalid email")
    }

    const hashedPassword = password ? await argon.hash(password) : null

    try {
        const user = prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        })

        return user
    } catch (error) {
        logger.error(error)
        throw error
    }
}
