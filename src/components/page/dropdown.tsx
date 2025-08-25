"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

const pages = [
  { name: "Home", path: "/" },
  { name: "Health Access", path: "/healthaccess" },
  { name: "Mental Health", path: "/mentalhealth" },
  { name: "Air Quality", path: "/airquality" },
];

const Dropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={dropdownRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Trigger */}
      <div
        style={{ cursor: "pointer" }}
        onMouseDown={() => setOpen((prev) => !prev)}
      >
        Menu
        <span className="pl-1">{open ? "▲" : "▼"}</span>
      </div>

      {/* Animated dropdown */}
      <div
        className={`absolute top-[110%] left-0 z-[1000] min-w-[150px] origin-top transform overflow-hidden rounded border border-gray-300 bg-white shadow-lg transition-all duration-500 ease-out ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        {pages.map((page) => (
          <Link
            href={page.path}
            className="flex flex-col p-2 text-black hover:bg-gray-200"
            onClick={() => setOpen(false)}
            key={page.name}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
