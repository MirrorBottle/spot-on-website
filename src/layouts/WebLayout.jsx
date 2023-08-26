import { WebHeader } from "./components/WebHeader"
import { WebFooter } from "./components/WebFooter"
import { WebTrialBanner } from "./components/WebTrialBanner"



function WebLayout({ children }) {
  return (
    <>
      <WebHeader />
      <main>{ children }</main>
      <WebTrialBanner/>
      <WebFooter />
    </>
  )
}

export default WebLayout