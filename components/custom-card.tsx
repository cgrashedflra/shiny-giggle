import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { auth, signIn, signOut } from "@/auth"

function AuthForm({ action, label }: { action: () => Promise<void>, label: string }) {
    return (
        <form action={action} className="w-full">
            
            <Button variant="outline" size="lg" className="w-full h-10" type="submit">
                 <img src="/Github.svg" className="w-6 h-6 rounded-2xl " alt="github icon" />
                {label}
            </Button>
        </form>
    )
}

export async function ProfileCard() {
    const session = await auth()
    const user = session?.user  

    return (
        <Card className="mx-auto w-full max-w-sm">
            <CardHeader>
               
                <Avatar>
                    <AvatarImage src={user?.image || ""} />
                    <AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback>
                </Avatar>
                <CardTitle>{user?.name || "Guest"}</CardTitle>
                <CardDescription>{user?.email || "No email"}</CardDescription>
            </CardHeader>

            <CardContent>
                <p>{session ? "You're logged in successfully!" : "Click to sign in with GitHub"}</p>
            </CardContent>

            <CardFooter>
                {session ? (
                    <AuthForm
                        action={async () => { "use server"; await signOut() }}
                        label="Sign Out"
                    />
                ) : (
                    <AuthForm
                        action={async () => { "use server"; await signIn("github") }}
                        label="Sign In with GitHub"
                    />
                )}
            </CardFooter>
        </Card>
    )
}