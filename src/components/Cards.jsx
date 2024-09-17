

export function Cards({shoe,onClickCard}){

    return (
       
        <div onClick={()=>onClickCard(shoe)} className={`${shoe.color} hover:scale-[1.05] hover:ease-linear duration-100 relative max-w-xl py-6 px-8 overflow-visible`}>
        <h3 className="text-2xl mb-8 font-bold">{shoe.title}</h3>
        <span className="underline text-md uppercase ">Shop Now+</span>
        <img className="absolute -right-6 -top-2 w-48 h-48 object-contain " src={shoe.src} alt="" />
        </div>
       
        
       
        )}