import { WebHeader } from "./components/WebHeader"

function DashboardLayout({ children }) {
  return (
    <>
      <WebHeader />
      <main>{ children }</main>
    </>
  )
}

export default DashboardLayout