"use client";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./NavbarComponent"), { ssr: false });

export default Navbar;
