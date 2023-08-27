import { memo, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import LoadingFallback from '../components/LoadingFallback'
import Home from '../page/home/Home'
import { Card } from 'antd'

const ApplicationRouters = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback fullscreen />}>{
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
          <Card style={{ height: '200px', width: '200px', display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Home />
          </Card>
        </div>
      }</Suspense>
    </BrowserRouter>
  )
}

// Prevent re-render router objecsts
export default memo(ApplicationRouters)
