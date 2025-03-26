"use client";
import dynamic from "next/dynamic";

// Disable SSR for Navbar
const Navbar = dynamic(() => import("./NavbarComponent"), { ssr: false });

export default Navbar;
