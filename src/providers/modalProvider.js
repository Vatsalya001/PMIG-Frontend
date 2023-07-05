import { createContext, useState,useContext } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({children}) =>{

 const [open,setOpen] = useState(false);
 const openModal = ()=>{
  setOpen(true);
 }
 const closeModal = ()=>{
  setOpen(false);
 }

 return <ModalContext.Provider value={{openModal,closeModal,open}}>{children}</ModalContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(ModalContext)
}