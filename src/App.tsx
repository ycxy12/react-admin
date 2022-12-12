import { Outlet, useRoutes } from "react-router-dom"
import { useState } from "react"
import router from "./router"

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className="App">
      {/* 老式写法 */}
      {/* <Outlet></Outlet> */}
      {/* 新写法 */}
      {outlet}
    </div>
  )
}

export default App
