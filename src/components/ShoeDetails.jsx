
import { useState } from "react";
import { QTY, Size } from "../Constant";
import { Select } from "./Select";

export default function ShoeDetails({ Shoe, addButton }) {
  const [form, setForm] = useState({ qty: null, size: null });

  return (
    <div className="mt-2 flex flex-col lg:flex-row-reverse  md:gap-32 justify-center items-center">
      <div className="ShoeBackground">
        <img src={Shoe.src} alt="Shoe" className="bigShoe" />
      </div>
      <div className="w-full flex flex-col gap-3">
        <h1>{Shoe.title}</h1>
        <p>{Shoe.desc}</p>
        <div className="flex flex-row gap-8">
          <h2>{Shoe.price}</h2>

          <Select
            value={form.qty}
            onChangeItem={(qty) => setForm({ ...form, qty })}
            title={"QTY"}
            options={QTY}
            className={"py-3 px-8"}
          />
          <Select
            value={form.size}
            onChangeItem={(size) => setForm({ ...form, size })}
            title={"SIZE"}
            options={Size}
            className={"py-3 px-8"}
          />
        </div>
        <div className="flex gap-10 justify-start items-center my-4">
          <button onClick={() => addButton(Shoe, form.qty, form.size)} className="Btn1">Add to bag</button>
          <a href="#" className="underline font-semibold dark:text-white text-lg">View details</a>
        </div>
      </div>
    </div>
  );
}