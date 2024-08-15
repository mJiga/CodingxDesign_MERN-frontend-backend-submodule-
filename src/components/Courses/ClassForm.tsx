import { Pencil } from "lucide-react";
import { useState } from "react";

function ClassForm() {
  return (
    <div className="container relative flex items-center justify-center border-2 border-opacity-60 border-zinc-300 max-w-4xl h-20 rounded-3xl shadow-lg overflow-hidden">
      <form className="flex w-full h-full items-center">
        <label className="group flex-1 h-full flex flex-col justify-center px-6 border-r border-zinc-300 hover:bg-zinc-100 transition-colors ease-in-out duration-300 cursor-pointer">
          <span className="text-sm font-extrabold">Classification</span>
          <input
            placeholder="Choose classification"
            className="text-xs font-medium text-zinc-500 bg-transparent focus:outline-none focus:text-black w-full group-hover:placeholder-zinc-400"
            required
          />
        </label>

        <label className="group flex-1 h-full flex flex-col justify-center px-6 border-r border-zinc-300 hover:bg-zinc-100 transition-colors ease-in-out duration-300 cursor-pointer">
          <span className="text-sm font-extrabold">Class</span>
          <input
            placeholder="Input Class name"
            className="text-xs font-medium text-zinc-500 bg-transparent focus:outline-none focus:text-black w-full group-hover:placeholder-zinc-400"
            required
          />
        </label>

        <label className="group flex-1 h-full flex flex-col justify-center px-6 border-r border-zinc-300 hover:bg-zinc-100 transition-colors ease-in-out duration-300 cursor-pointer">
          <span className="text-sm font-extrabold">Course Number</span>
          <input
            placeholder="Input course number"
            className="text-xs font-medium text-zinc-500 bg-transparent focus:outline-none focus:text-black w-full group-hover:placeholder-zinc-400"
            required
          />
        </label>

        <label className="group flex-1 h-full flex flex-col justify-center px-6 hover:bg-zinc-100 transition-colors ease-in-out duration-300 cursor-pointer">
          <span className="text-sm font-extrabold">Meeting Times</span>
          <input
            placeholder="Choose meeting times"
            className="text-xs font-medium text-zinc-500 bg-transparent focus:outline-none focus:text-black w-full group-hover:placeholder-zinc-400"
            required
          />
        </label>

        <button className="h-full bg-blue-800 text-white font-bold text-base px-8 hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
          <Pencil className="mr-2 w-5 stroke-white" />
          Register
        </button>
      </form>
    </div>
  );
}

export default ClassForm;
