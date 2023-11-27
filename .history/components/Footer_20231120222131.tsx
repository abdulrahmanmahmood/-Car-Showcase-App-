import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col
     text-black-100 mt-5
      border-gray-100 ">
        <div className="flex max-md:flex-col 
        flex-wrap justify-between gap-5
        sm:px-16 px-6 py-10 ">
          <div className="flex flex-col justify-start 
          items-start gap-6 ">
            <Image src='/logo.svg' alt="logo" 
            height={18} width={118} 
            className="object-contain"/>
            <p></p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
