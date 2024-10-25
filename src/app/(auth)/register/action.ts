"use server"

import { register, registerSchema } from "@/services/authServices"
import { prisma } from "@/utils/prisma"

export async function registerAction(prevSt: unknown, formData: FormData) {
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    const { data, error, success } = registerSchema.safeParse({
        name,
        email,
        password,
    })

    if (!success) {
        return {
            status: "error",
            error: error.flatten().fieldErrors,
        }
    }

    let user = await prisma.user.findUnique({
        where: {
            email: data.email,
        },
    })

    if (user) {
        return {
            status: "error",
            error: {
                email: "Email already exists",
            },
        }
    }

    user = await register(data.name, data.email, data.password)

    return {
        status: "success",
        data: user,
    }
}
