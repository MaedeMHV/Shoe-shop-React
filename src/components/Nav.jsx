import { AiOutlineShopping } from "react-icons/ai"; 
import NikeLogo from "../assets/nike-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Nav({SetClickStatus}) {
  const Routs = ["Home", "Products", "Contact Us", "About Us", "Blog"];
  const [IsMobileShown, SetIsMobileShown] = useState(false);

  return (
    <nav className="Nav">
      <a href=""> <img src={NikeLogo} alt="nike_logo" className="  h-20 w-20"  /></a>
      <button className="Hamburger" onClick={() => SetIsMobileShown(!IsMobileShown)}>
        <RxHamburgerMenu className="dark:text-white" size='25' />
      </button>

      {/* Nav menu */}
      <div className={`${IsMobileShown? '' : 'hidden'} bg-stone-100 text-lg text-stone-800  dark:bg-night-50 md:dark:bg-transparent rounded-md w-full md:w-fit p-2 md:bg-transparent md:block`}>
        <ul className="Menu_nav">
          {Routs.map((route, i) => {
            return (
              <li key={route} className={`mb-1 p-2 z-10  ${i === 0? "bg-blue-500  text-white md:bg-transparent md:text-blue-500" : "hover:bg-night-100 hover:md:bg-transparent dark:text-white hover:text-blue-500 "} ${(i === 3 || i === 4) && "md:text-white "}`}>
                <a href="#">{route}</a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Shopping Basket */}

      <button onClick={SetClickStatus} className="w-12 h-12 z-10 bg-white shadow-lg rounded-full flex justify-center items-center md:static fixed bottom-8 "> 
        <AiOutlineShopping size={23} />
      </button>

    </nav>
  );
}