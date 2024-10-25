"use server"

import { authenticate, authenticateSchema } from "@/services/authServices"
import { createServerAction } from "zsa"

export const loginAction = createServerAction()
    .input(authenticateSchema)
    .handler(({ input }) => {
        return authenticate(input.email, input.password)
    })
