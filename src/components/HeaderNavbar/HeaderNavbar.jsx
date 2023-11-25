import { useState } from "react"
import {useNavigate} from "react-router-dom"
import {HeaderNavbarContainer, ButtonNavbar} from "./styled.HeaderNavbar"

import { handleSignIn, handleSignUp , handleHome} from "../../router/coordinator"


export function HeaderNavbar(){
  
  const navigate = useNavigate()

  return(
    <HeaderNavbarContainer>
      <h1>{logoImg}</h1>
    <nav>
      <ButtonNavbar onClick={()=>{handleHome(navigate)}}>HOME</ButtonNavbar>
      <ButtonNavbar onClick={()=>{handleSignUp(navigate)}}>CADASTRO</ButtonNavbar>
      <ButtonNavbar onClick={()=>{handleSignIn(navigate)}}>LOGIN</ButtonNavbar>
     </nav>
    </HeaderNavbarContainer>
  )
}