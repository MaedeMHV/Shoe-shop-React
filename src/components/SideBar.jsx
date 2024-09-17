
import { Shoes,QTY,Size } from "../Constant";
import ShopItems from "./ShopItems";
import { CgClose } from "react-icons/cg"; 

export default function SideBar({children,isOpen,CloseBtn}){
   
    return( <div >
   {isOpen&& <div className="w-full h-full fixed top-0 left-0 opacity-40 bg-black"></div> } 
        <div className={`${isOpen ? "translate-x-0":"translate-x-full"} duration-500 ease-linear fixed !z-50 overflow-y-auto dark:bg-night-100 bg-white top-0 right-0 h-screen w-full md:w-2/5 shadow-xl p-7`}>
       <div className="w-full flex flex-row justify-between items-center">  <span className="text-3xl dark:text-white font-bold">Cart</span> 
        <button onClick={CloseBtn} className=" "><CgClose className="dark:text-white" size={25} /></button></div> 
      
    {children}
        </div>
      
</div>
    )
}