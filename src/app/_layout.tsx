import Home from "../home"

import { StatusBar } from "react-native"

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  )
}
