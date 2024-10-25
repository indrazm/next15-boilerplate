"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { use, useActionState, useEffect } from "react"
import { registerAction } from "./action"

export default function Register() {
    const [state, action, isPending] = useActionState(registerAction, null)

    useEffect(() => {
        if (state?.status === "success") {
            window.location.href = "/login"
        }
    }, [state])

    return (
        <main className="space-y-5">
            <section>
                <h3>Register</h3>
                <p>Create an account to continue</p>
            </section>
            <form className="space-y-2" action={action}>
                <Input name="name" type="text" placeholder="Name" />
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Password" />
                <Button disabled={isPending} type="submit" className="w-full">
                    Register
                </Button>

                {state?.error?.name && <p className="text-sm font-semibold text-red-500">{state.error.name}</p>}
                {state?.error?.email && <p className="text-sm font-semibold text-red-500">{state.error.email}</p>}
                {state?.error?.password && <p className="text-sm font-semibold text-red-500">{state.error.password}</p>}
            </form>
            <section>
                <p>
                    Have an account ? <Link href="/login">Login</Link>
                </p>
            </section>
        </main>
    )
}
