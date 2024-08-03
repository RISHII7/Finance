import { UserButton } from "@clerk/nextjs"

const DashboardPage = () => {
  return (
    <div>
        This is an authenticated Route..
        <UserButton afterSignOutUrl="/" />
    </div>
  )
}
export default DashboardPage