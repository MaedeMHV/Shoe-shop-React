import ShopItems from "./ShopItems";



export default function Cart({ items,deleteBtn }) {
    // Check if items are being received correctly
    return (
      <div  className=" mt-9 dark:bg-night-100 ">
        <ul className="flex flex-col justify-center items-center gap-3">
          {items.map((item) => (
            <li key={item.product.id}>
              <ShopItems Item={item.product}   size={item.size} qty={item.qty} deleteItemBtn={deleteBtn} />
            </li>
          ))}
        </ul>
      </div>
    );
  }