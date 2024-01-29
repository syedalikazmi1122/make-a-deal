"use client";
import { navbarbuttonprops } from "@/app/types";

 export default function buttoncomponent({title,disabled,type,onClick}:navbarbuttonprops) {
    return (
      <button
        className="flex items-center px-2 justify-center hover:translate-x-1 hover:bg-white hover:text-black cursor-pointer  border border-white rounded-md h-8 w-fit   text-white "
        title={title}
        disabled={disabled}
        onClick={() => console.log("clicked")}
      >
        {title}
      </button>
    );
 }