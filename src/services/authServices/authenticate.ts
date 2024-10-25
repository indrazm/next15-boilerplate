import { logger } from "@/utils/logger"
import { prisma } from "@/utils/prisma"
import z from "zod"

export const authenticateSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})

export async function authenticate(email: string, password: string) {
    const inputValidation = authenticateSchema.safeParse({
        email,
        password,
    })

    if (!inputValidation.success) {
        logger.info(`User trying to log in with invalid email format: ${email}`)
        throw new Error("Invalid email")
    }

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    })

    if (!user) {
        logger.info(`User trying to log in with email ${email} not found`)
        throw new Error("User not found")
    }

    if (!user.password) {
        logger.info(`User trying to log in with email ${email} has no password set`)
        throw new Error("Password not set")
    }

    const isPasswordValid = Bun.password.verify(password, user.password)

    if (!isPasswordValid) {
        logger.info(`User trying to log in with email ${email} has invalid password`)
        throw new Error("Invalid password")
    }

    const newSession = await prisma.session.create({
        data: {
            userId: user.id,
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
            sessionId: crypto.randomUUID(),
        },
    })

    logger.info(`User ${email} logged in with session ${newSession.sessionId}`)
    return { sessiondId: newSession.sessionId }
}
