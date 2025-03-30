"use client";
import { Drawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { motion } from "framer-motion";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0.5, scale: 1, y: -60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="fixed w-full top-0 left-0 z-[100] navbar"
      >
        <div className="flex justify-between items-center py-3 lg:px-20 px-8 bg-primary">
          <Image
            src="/logo.png"
            width="200"
            height="200"
            alt="padikkal"
            className="lg:max-w-[170px] max-w-[120px] max-h-[38px]"
          />
          <div className="lg:flex hidden gap-10 items-center">
            <Link href={"/#about"} className="hover:text-white duration-200">
              About
            </Link>
            <Link href={"/#benefit"} className="hover:text-white duration-200">
              Benefit
            </Link>
            <Link href={"/#partner"} className="hover:text-white duration-200">
              Partner
            </Link>
            <Link href={"/#service"} className="hover:text-white duration-200">
              Service
            </Link>
            <Link href={"/#faq"} className="hover:text-white duration-200">
              FAQ
            </Link>
            <Link
              href={"/#testimonials"}
              className="hover:text-white duration-200"
            >
              Testimonials
            </Link>
            <Link
              href={"/#contact"}
              className="hover:text-black duration-200 text-white bg-yc py-[10px] px-7 rounded-md shadow-md"
            >
              Get Started
            </Link>
          </div>
          <div onClick={toggleDrawer(true)} className="lg:hidden text-xl">
            <TbMenu />
          </div>
        </div>
      </motion.div>
      <div className="h-[60px]"></div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <section className="flex flex-col justify-between w-full min-w-[150px] h-[100vh] px-10">
          <div className="">
            {/* <div className="flex justify-end pt-10">
                <IoMdClose className="text-4xl" onClick={toggleDrawer(false)} />
              </div> */}
            <div className="flex justify-center pt-20 font-semibold capitalize text-2xl ec tracking-[2px]">
              <h1>Menu</h1>
            </div>
            <div className="flex  flex-col gap-3  pt-10 ">
              <Link onClick={() => setOpen(false)} href={"/"}>
                Home
              </Link>
              <Link onClick={() => setOpen(false)} href={"/#about"}>
                About
              </Link>
              <Link onClick={() => setOpen(false)} href={"/#benefit"}>
                Benefit
              </Link>
              <Link onClick={() => setOpen(false)} href={"/#partner"}>
                Partner
              </Link>
              <Link onClick={() => setOpen(false)} href={"/#service"}>
                Service
              </Link>
              <Link onClick={() => setOpen(false)} href={"/#faq"}>
                FAQ{" "}
              </Link>
              <Link onClick={() => setOpen(false)} href={"/#testimonials"}>
                Testimonials
              </Link>
              <Link
                href={"/#contact"}
                className="hover:text-black duration-200 text-white bg-yc py-[10px] px-7 rounded-md"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="bottom flex align-bottom text-black pb-10 justify-center  pt-10">
            <div className="">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  width="500"
                  height="500"
                  alt=""
                  className="w-20"
                />
              </div>
            </div>
          </div>
        </section>
      </Drawer>
    </div>
  );
};

export default NavbarComponent;
