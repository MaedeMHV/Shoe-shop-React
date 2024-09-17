import { Cards } from "./Cards"



export function NewArrival({Shoes,onClickCards}){
return(
    <div className="mt-12">
        <div className="flex justify-center items-center">
<div className="text-4xl font-extrabold tracking-wide uppercase bg-[url('./assets/img/lines.png')] dark:text-white "> New Arrival</div></div>
   <div className="mt-10 grid grid-cols-1 justify-between gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {Shoes.map((shoe)=>( 
        <Cards shoe={shoe} onClickCard={onClickCards} key={shoe.id}/>
       
))}
   
   </div>
    </div>)}