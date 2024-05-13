import { Route, Routes } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import HomePage from "./Pages/HomePage"
import RegisteredGyms from "./Pages/RegisteredGyms"
import Videos from "./Pages/Videos"
import Gym from "./Pages/Gym"


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registered-gyms" element={<RegisteredGyms />} />
        <Route path="/registered-gyms/:id" element={<Gym />} />
        <Route path="/videos" element={<Videos />} />
    </Routes>
  )
}

export default AppRoutes