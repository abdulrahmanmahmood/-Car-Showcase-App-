import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
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
            <p className="text-base text-gray-700">
              Carhub 2023 <br />
              All rights reserved &copy;
            </p>
          </div>
          <div className="footer__links">
              {footerLinks.map((link)=>(
                <div key={link.title} className="footer__link">
                  <h3 className="font-bold">{link.title}</h3>
                  {link.links.map((link)=>(
                    <Link href={link.url} key={link.title}
                     className="text-gray-500">{link.title}</Link>
                  ))}
                </div>
              ))}
          </div>

          <div className="flex justify-between
          items">

          </div>
        </div>
      </footer>
  );
}

export default Footer;
