import { WebHeader } from "./components/WebHeader"
import { WebFooter } from "./components/WebFooter"


function WebLayout({ children }) {
  return (
    <>
      <WebHeader />
      <main>{ children }</main>
      <WebFooter />
    </>
  )
}

export default WebLayout