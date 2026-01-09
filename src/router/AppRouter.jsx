import { Route, Routes } from "react-router-dom"
import { GloomylRoutes } from "../gloomy/routes/GloomyRoutes"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<GloomylRoutes/>}/>
    </Routes>
  )
}