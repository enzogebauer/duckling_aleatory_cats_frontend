import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Register } from "./pages/register/register"
export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  )
}