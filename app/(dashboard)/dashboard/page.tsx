import { GenerationForm } from "@/components/create/generation-form"
import { DashboardHeader } from "@/components/header"
import { PixelatedImage } from "@/components/pixelated-image"
import { DashboardShell } from "@/components/shell"
import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation"

export const metadata = {
    title: "Dashboard",
}

export default async function DashboardPage() {
    const user = await getCurrentUser()

    if (!user) {
        redirect(authOptions?.pages?.signIn || "/login")
    }

    return (
        <DashboardShell>
            <DashboardHeader
                heading="Generations"
                text="Create and view generations"
            >
                {/* <PostCreateButton /> */}
            </DashboardHeader>
            <div>
                <GenerationForm user={{ id: user.id, name: user.name || "" }} />
            </div>
        </DashboardShell>
    )
}
