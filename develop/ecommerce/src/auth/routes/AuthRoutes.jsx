import { Navigate, Route, Routes } from "react-router-dom"
import {NewLogin, NewRegister} from "../pages"

export const AuthRoutes = () => {
  
  return (
    <Routes>
        <Route path="/login" element={<NewLogin />} />
        <Route path="/register" element={<NewRegister />} />
        <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
