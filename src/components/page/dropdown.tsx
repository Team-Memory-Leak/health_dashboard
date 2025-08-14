"use client"

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const pages = [
  { name: "Home", path: "/" },
  { name: "Health Access", path: "/healthAcess" },
  { name: "Profile", path: "/" },
  { name: "Settings", path: "/" },
];

const Dropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        style={{
          cursor: "pointer",
        }}
      >
        Menu
        <span className="pl-1">
          {open ? "▲" : "▼"}
        </span>
      </div>
      {open && (
        <div
          className="absolute top-[110%] left-0 bg-white border border-gray-300 rounded shadow-lg z-[1000] min-w-[150px] text-harc-darkgray"
        >
          {pages.map((page) => (
            <Link
              href={page.path}
              className="flex flex-col p-2"
              onClick={() => setOpen(false)}
              key={page.name}
            >
              {page.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;