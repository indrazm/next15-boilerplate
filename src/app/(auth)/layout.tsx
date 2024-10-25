import React from "react"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex h-screen items-center justify-center">
            <div className="w-[340px]">{children}</div>
        </main>
    )
}
