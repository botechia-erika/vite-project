import { createContext, useState } from "react";

export const  MainContext = createContext()


export const MainProvider = ({children})=>{  
  return(
    <MainContext.provider value={{}}>
      {children}
    </MainContext.provider>
  )
}