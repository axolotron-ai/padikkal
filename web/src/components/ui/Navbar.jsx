import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbMenu } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="lg:px-20 px-8 bg-primary">
      <div className="flex justify-between items-center py-3">
        <Image
          src="/logo.png"
          width="200"
          height="200"
          alt="padikkal"
          className="lg:max-w-[170px] max-w-[100px]"
        />
        <div className="lg:flex hidden gap-10 items-center">
            <Link href={"/"} className="hover:text-white duration-200">About</Link>
            <Link href={"/"} className="hover:text-white duration-200">Benefit</Link>
            <Link href={"/"} className="hover:text-white duration-200">Partner</Link>
            <Link href={"/"} className="hover:text-white duration-200">Service</Link>
            <Link href={"/"} className="hover:text-white duration-200">FAQ</Link>
            <Link href={"/"} className="hover:text-white duration-200">Testimonials</Link>
            <Link href={"/"} className="hover:text-black duration-200 text-white bg-[#FBC914] py-[10px] px-7 rounded-md border border-white">Get Started</Link>
        </div>
        <div className="lg:hidden text-xl">
        <TbMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
