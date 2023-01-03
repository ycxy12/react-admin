import { useRoutes } from "react-router-dom"
import { ConfigProvider } from 'antd';
import router from "./router"

const App = () => {
  const outlet = useRoutes(router)

  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#b14449',
        colorPrimaryHover: "#c75b59"
      },
    }}>
      {outlet}
    </ConfigProvider>
  )
}

export default App
