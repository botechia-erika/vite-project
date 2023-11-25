import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderNavbar } from "../components/HeaderNavbar/HeaderNavbar";
import { HomePage } from "../pages/HomePage/HomePage";
import { SinInPage } from "../pages/SignInPage/SignInPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";

export function AppRouter(){
  return(
    <BrowserRouter>
    <HeaderNavbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/sign-in" element={<SinInPage/>}/>
      <Route path="/sign-up" element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}