import { prisma } from "@/utils/prisma"

export async function authenticate(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    throw new Error("User not found")
  }

  if (!user.password) {
    throw new Error("Password not set")
  }

  const isPasswordValid = Bun.password.verify(password, user.password)

  if (!isPasswordValid) {
    throw new Error("Invalid password")
  }

  const newSession = await prisma.session.create({
    data: {
      userId: user.id,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      sessionId: crypto.randomUUID(),
    },
  })

  return { sessiondId: newSession.sessionId }
}
