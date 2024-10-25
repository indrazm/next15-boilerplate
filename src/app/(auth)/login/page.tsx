import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Login() {
    return (
        <main className="space-y-5">
            <section>
                <h3>Login</h3>
                <p>Fill in your credentials</p>
            </section>
            <form className="space-y-2">
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Password" />
                <Button type="submit" className="w-full">
                    Login
                </Button>
            </form>
            <section>
                <p>
                    Dont have an account ? <Link href="/register">Register</Link>
                </p>
                <Link href="/forgot-password">Forgot password</Link>
            </section>
        </main>
    )
}
