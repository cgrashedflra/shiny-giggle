import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { auth, signIn, signOut } from "@/auth"

export async function ProfileCard() {
    const session = await auth()

    return (
        <Card className="mx-auto w-full max-w-sm">
            <CardHeader>
                <Avatar>
                    <AvatarImage src={session?.user?.image || ""} />
                    <AvatarFallback>{session?.user?.name?.[0] || "U"}</AvatarFallback>
                </Avatar>
                <CardTitle>{session?.user?.name || "Guest"}</CardTitle>
                <CardDescription>
                    {session?.user?.email || "No email"}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    {session ? "You're logged in successfully!" : "Click to sign in with GitHub"}
                </p>
            </CardContent>
            <CardFooter>
                {session ? (
                    <form action={async () => {
                        "use server"
                        await signOut()
                    }} className="w-full">
                        <Button variant="outline" size="sm" className="w-full" type="submit">
                            Sign Out
                        </Button>
                    </form>
                ) : (
                    <form action={async () => {
                        "use server"
                        await signIn("github")
                    }} className="w-full">
                        <Button variant="outline" size="sm" className="w-full" type="submit">
                            Sign In with GitHub
                        </Button>
                    </form>
                )}
            </CardFooter>
        </Card>
    )
}
