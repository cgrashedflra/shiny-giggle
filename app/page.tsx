

import { ThemeToggle } from "@/components/theme-toggle"
import { ProfileCard } from "@/components/custom-card";

const page = () => {
  return (
    <div className="mx-auto max-w-2xl my-10 p-4 space-y-8">
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl font-bold tracking-tight">Practice App</h1>
        <ThemeToggle />
      </div>

      <div className="flex gap-4">
        <ProfileCard />
      </div>
    </div>
  )
}

export default page 