"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden   w-full">
      <div className="flex justify-between items-center w-full">
        <p>menu</p>
        <Menu
          className="w-6 h-6 text-gray-800 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

 
        <div
          className={`absolute top-full w-full left-0  bg-yellow-50 border-t border-gray-300 shadow-md transition duration-700 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        >
          <ul className="p-4">
            <li>linha 1</li>
            <li>linha 2</li>
            <li>linha 3</li>
            <li>linha 4</li>
            <li>linha 5</li>
          </ul>
        </div>
  
    </div>
  );
}
