import { BiChevronDown } from "react-icons/bi"; 


export function Select({title,options, className,onChangeItem,value}){
return(
<div className="relative">
    <select onChange={(e)=>onChangeItem(e.target.value)} className={`${className}  bg-white border-2 border-stone-300 appearance-none`} value={value||''}>
        <option value="" disabled hidden>{title}</option>
 
{options.map((option)=>(
<option key={option}>{option}</option>

))}
    </select>
    <div className="absolute pointer-events-none inset-y-0 right-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
<BiChevronDown />

    </div>
    </div>
)

}