import { prisma } from "@/utils/prisma"

export async function register(name: string, email: string, password?: string) {
  const hashedPassword = password ? await Bun.password.hash(password, "argon2d") : null

  const user = prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  return user
}
