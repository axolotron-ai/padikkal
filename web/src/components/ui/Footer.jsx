import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-primary py-10 lg:px-20 px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Image
              src="/logo.png"
              width="200"
              height="200"
              alt="padikkal"
              className="max-w-[120px]"
            />
            <p className=" text-[#453069] py-5">
              Padikkal Travels Private Limited is a renowned brand in the bus
              operating industry. Our vision is to give a memorable experience
              to our customers.
            </p>
            <div className="flex gap-5 items-center">
            <FaPhone />
            <h1>08040546060</h1>

            </div>
            {/* <div className="flex space-x-4">
              <Link href="#" className="text-[#453069] hover:text-gray-900">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#453069] hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#453069] hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#453069] hover:text-gray-900">
                <Youtube className="h-5 w-5" />
              </Link>
            </div> */}
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 ">
              <li>
                <Link href="#" className="text-[#453069] hover:text-gray-900">
                
                  Benefit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#453069] hover:text-gray-900">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#453069] hover:text-gray-900">
                  Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#453069] hover:text-gray-900">
                  Faq
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#453069] hover:text-gray-900">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 ">
              <li>
                <Link href="#" className="text-[#453069] hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#453069] hover:text-gray-900">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#453069] hover:text-gray-900">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#453069] hover:text-gray-900">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 ">
              <li>
                <Link href="#" className="text-[#453069] hover:text-gray-900 flex gap-2">
                <Image
              src="/insta.svg"
              width="200"
              height="200"
              alt="padikkal"
              className="max-w-6"
            />
                  <h1>Instagram</h1>
                </Link>
              </li>
              <li>
              <Link href="#" className="text-[#453069] hover:text-gray-900 flex gap-2">
                <Image
              src="/facebook.svg"
              width="200"
              height="200"
              alt="padikkal"
              className="max-w-6"
            />
                  <h1>Facebook</h1>
                </Link>
              </li>
              <li>
              <Link href="#" className="text-[#453069] hover:text-gray-900 flex gap-2">
                <Image
              src="/linkedin.svg"
              width="200"
              height="200"
              alt="padikkal"
              className="max-w-6"
            />
                  <h1>LinkedIn</h1>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary mt-8 pt-8  text-[#453069]">
          <p>
            © {new Date().getFullYear()} Padikkal Travels Private Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
