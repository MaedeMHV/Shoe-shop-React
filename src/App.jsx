import { BiMoon, BiSun } from "react-icons/bi";  
import {Shoes} from "./Constant"
import ShoeDetails from './components/ShoeDetails'
import Nav from './components/Nav'
import { NewArrival } from "./components/NewArrival"
import SideBar from "./components/SideBar"
import { useState } from "react"
import Cart from "./components/Cart"

export default function App() {
const [OpenStatus,SetOpenStatus]=useState(false)
const [CurrentShoe,SetCurrentShoe]=useState(Shoes[2])
const [CartItem,SetCartItem]=useState([])

const ToggleDayNight=()=>{
 window.document.documentElement.classList.toggle('dark') 
}
 
const removeFromCart=(productId)=>{
  console.log("object");
  const updateCartItem=[...CartItem]
 const ExistingItemIndex=CartItem.findIndex((item)=>{item.product.id===productId})
  updateCartItem.splice(ExistingItemIndex,1)
  SetCartItem(updateCartItem)
}
const addToCart = (product, qty, size) => {
  if (qty && size) {
    const updateCartItem = [...CartItem];
    const ExistingItem = updateCartItem.find((item) => item.product.id === product.id);

    if (ExistingItem) {
      ExistingItem.qty = qty;
      ExistingItem.size = size;
    } else {
      updateCartItem.push({ product: product, qty: qty, size: size });
    }

    SetCartItem(updateCartItem);
  }
};


  return (
<div className='px-10 md:px-24 py-16 relative dark:bg-night bg-white'>
<Nav SetClickStatus={()=>SetOpenStatus(!OpenStatus)}/>
<ShoeDetails Shoe={CurrentShoe} addButton={addToCart}/>
<NewArrival Shoes={Shoes} onClickCards={SetCurrentShoe}/>
<SideBar isOpen={OpenStatus} CloseBtn={()=>SetOpenStatus(false)}>

<Cart items={CartItem} deleteBtn={removeFromCart}/>

</SideBar>
<button className="w-12 h-12 z-10 bg-black dark:bg-white shadow-lg rounded-full flex justify-center items-center right-8  fixed bottom-8 " onClick={ToggleDayNight}> 
       <BiSun className="hidden dark:flex" /><BiMoon color="white" className="flex dark:hidden" />
      </button>

</div>)
   
}


