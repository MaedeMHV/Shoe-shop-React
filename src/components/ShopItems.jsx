import { MdDeleteOutline } from "react-icons/md"; 
import { Select } from "./Select"
import { QTY,Size } from "../Constant";
export default function ShopItems({Item,size,qty,deleteItemBtn}){

    return(
<div className="h-[170px] hover:bg-green-100 bg-white shadow-sm flex w-full flex-row items-start justify-center p-4 dark:text-white dark:bg-night-50" >
    <img className="h-[120px] w-[120px] object-contain object-center " src={Item.src} alt={Item.title} />
    <div className="flex relative flex-col gap-2 justify-start items-start ">
        <h3 className="text-2xl font-bold">{Item.title}</h3>
        <span className="text-[12px] dark:text-white text-stone-700 ">{Item.desc}</span>
        <span className=" absolute right-3 top-2 font-bold" >{Item.price}</span>
     <div className="flex flex-row gap-7">  
    <div>    <span className="text-sm">QTY</span>
         <Select value={qty} options={QTY} className={ "py-1 px-6 dark:text-black"}/></div>
      <div>  <span className="text-sm">SIZE</span>
        <Select className={ "py-1 px-6 dark:text-black"} value={size} options={Size}/></div> 
       <div onClick={()=>deleteItemBtn(Item.id)} className=" absolute right-3 bottom-2"> <MdDeleteOutline size={22} /></div>
    </div>
    </div>

</div>

    )
}