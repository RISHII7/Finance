const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <main className="px-3 lg:px-14">
            {children}
        </main>
    </>
  )
}
export default DashboardLayout