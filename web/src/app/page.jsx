"use client";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Form from "@/components/ui/Form";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import VideoPlayer from "@/components/ui/VideoPlayer";

const herodata = {
  schools: 20,
  students: 1000,
};
export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* hero */}
      <div className="lg:px-20 md:px-10 px-6 lg:pt-20 pt-10 ">
        <div className="grid lg:grid-cols-2">
          <div className="">
            <motion.h1
              initial={{ opacity: 0.5, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="xl:text-[40px] text-[30px] text-start text-primary jakarta font-[510] lg:leading-[50px]"
            >
              Seamless <span className="text-[#453069]"> School Trips,</span>{" "}
              <span className="relative">
                Memorable
                {/* <Image
                  src="/herovector1.png"
                  width="300"
                  height="300"
                  alt=""
                  className="lg:max-w-[150px] xl:max-w-[200px]"
                /> */}
              </span>{" "}
              <span className="flex justify-between pr-3">
                <span className="flex gap-3">
                  Experiences
                  <Image
                    src="/starvector.png"
                    alt="Hero Image"
                    width={200}
                    height={200}
                    className="lg:max-w-[60px] max-w-[30px]"
                  />
                </span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0.5, scale: 0.9, x: -150 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:text-[22px] text-lb pr-5 text-justify"
            >
              We believe every journey is an opportunity for learning . We
              provide the safe and reliable transportation to get you there.
            </motion.p>
            {/* <motion.div
              initial={{ opacity: 0.8, scale: 1, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="pl-[180px] lg:mt-[-10px]"
            >
              <Image
                src="/heroArrow.png"
                alt="Hero Image"
                width={100}
                height={100}
                className="max-w-[60px] lg:flex hidden"
              />
            </motion.div> */}
            <div className="lg:flex hidden">
              <Link
                href={"/#contact"}
                className="hover:text-blac mt-10 duration-200 text-white bg-gradient-to-r from-secondary to-accent py-[10px] px-7 rounded-md shadow-inner shadow-secondary"
              >
                Get Started
              </Link>
            </div>
            <div className="pt-5 mt-10 bg-[#FFF8F2] p-3 rounded-md text-black hidden lg:grid grid-cols-2 divide-x divide-tertiary w-fit">
              <div className="text-center px-5">
                <AnimatedNumber
                  value={herodata.schools}
                  className={"lg:text-3xl"}
                />
                <h1>Schools</h1>
              </div>
              <div className="text-center px-5">
                <AnimatedNumber
                  value={herodata.students}
                  className={"lg:text-3xl"}
                />
                <h1>Students</h1>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0.5, scale: 0.9, x: 150 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:flex hidden"
          >
            <Image
              src="/hero-bus.png"
              alt="Hero Image"
              width={1920}
              height={800}
              className=""
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0.8, scale: 1, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:hidden relative"
        >
          <div className="flex justify-center">
            <div className="">
              <div className="relative max-w-[500px]">
                <Image
                  src="/hero-bus.png"
                  alt="Hero Image"
                  width={1000}
                  height={1000}
                  className="lg:hidden flex pt-5"
                />
                <div className=" bg-secondary p-3 text-sm rounded-md text-white font-bold grid grid-cols-2 divide-x divide-tertiary w-fit absolute bottom-0 md:bottom-5 right-0">
                  <div className="text-center px-5">
                    <AnimatedNumber
                      value={herodata.schools}
                      className={"lg:text-3xl"}
                    />{" "}
                    <h1>Schools</h1>
                  </div>
                  <div className="text-center px-5">
                    <AnimatedNumber
                      value={herodata.students}
                      className={"lg:text-3xl"}
                    />
                    <h1>Students</h1>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-[-20px] pr-5">
                <div className="">
                  {/* <Image
                    src="/heroArrow.png"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    className="max-w-[60px] float-right mr-16"
                  /> */}
                </div>
              </div>
              <div className="flex justify-between">
                <Link
                  href={"/#contact"}
                  className="hover:text-black h-fit duration-200 text-white bg-gradient-to-r mt-10 from-secondary to-accent py-[10px] px-7 rounded-md border border-white shadow-2xl "
                >
                  Get Started
                </Link>
                <Image
                  src="/rocketArrow.png"
                  alt="Hero Image"
                  width={100}
                  height={100}
                  className="max-w-[100px] float-right mt-[-50px]"
                />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="w-full">
          <Image
            src="/rocketArrow.png"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[100px] float-right hidden lg:block mr-20 mt-[-110px]"
          />
        </div>
      </div>
      {/* about us */}
      <div
        id="about"
        className="lg:px-20 md:px-10 px-6 w-full lg:pt-10 scroll-mt-[120px]"
      >
        <div className="flex gap-5 items-center">
          <h1 className="text-yc text-2xl md:text-3xl lg:text-4xl">
            Who we are
          </h1>
          <Image
            src="/thinking.svg"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[30px] lg:max-w-[40px]"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-5 mt-5">
          <motion.div
            initial={{ opacity: 0.8, scale: 1, x: -150 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className=""
          >
            <Image
              src="/buses.png"
              alt="Hero Image"
              width={1000}
              height={1000}
              className="rounded-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0.8, scale: 1, x: 150 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:pt-10"
          >
            <p className="lg:text-[22px] text-lb text-justify">
              Padikkal Travels Private Limited is a renowned brand in the bus
              operating industry. Our vision is to give a new face to the bus
              industry. Since our inception passenger comfort has been our top
              priority. We have frequently added luxury buses to our huge fleet
              of buses. The only thing we focus on is that the comfort quotient
              of our passengers should never be compromised.
            </p>
            <div className="pt-10">
              <Link
                href={"/about"}
                className="hover:text-black h-fit duration-200 text-white bg-gradient-to-r from-secondary to-accent py-[10px] px-7 rounded-md shadow-inner shadow-secondary"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="w-full ">
          <Image
            src="/rocketlArrow.png"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[50px] w-auto"
          />
        </div>
      </div>
      {/* why choose us */}
      <div id="benefit" className="lg:px-20 px-6 scroll-mt-[120px]">
        <motion.div
          initial={{ opacity: 0.8, scale: 1, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex gap-5 items-center"
        >
          <h1 className="text-yc text-2xl md:text-3xl lg:text-4xl">
            Why Choose us
          </h1>
          <Image
            src="/question.svg"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[30px] lg:max-w-[40px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.8, scale: 1, y: 150 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="pt-10 grid md:grid-cols-3 gap-x-8 gap-y-5"
        >
          <Image
            src="/safety.png"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="aspect-square"
          />
          <Image
            src="/accessibility.png"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="aspect-square"
          />
          <Image
            src="/time.png"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="aspect-square"
          />
        </motion.div>
        <div className="w-full flex justify-end">
          <Image
            src="/rocketArrow2.png"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[100px] lg:mr-20"
          />
        </div>
      </div>
      {/* our partner */}
      <div
        id="partner"
        className="lg:px-20 px-6 bg-[#FFF8F2] py-10 scroll-mt-[70px]"
      >
        <motion.div
          initial={{ opacity: 0.8, scale: 1, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:flex justify-between"
        >
          <div className="flex gap-5 items-center">
            <h1 className="text-yc text-2xl md:text-3xl lg:text-4xl">
              Our Partner Schools{" "}
            </h1>
            <Image
              src="/question.svg"
              alt="Hero Image"
              width={100}
              height={100}
              className="max-w-[30px] lg:max-w-[40px]"
            />
          </div>
          <p className="pt-5 lg:pt-0 text-lb text-xl pr-10 max-w-[550px]">
            We&apos;re proud to support the learning journey of these institutions
          </p>
        </motion.div>
        <div className="flex justify-end">
          <Image
            src="/rarrow.svg"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[30px] lg:max-w-[40px]"
          />
        </div>
        <motion.div
          initial={{ opacity: 0.8, scale: 1, x: 150 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-10 flex items-end gap-8 overflow-scroll no-scrollbar"
        >
          {[...Array(8)].map((_, index) => (
            <div key={index} className="relative">
              <Image
                src={`/schools/${index + 1}.png`}
                alt="Hero Image"
                width={1000}
                height={1000}
                className="rounded-md min-w-[320px] lg:min-w-[340px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="lg:pl-20 pl-5">
        <Image
          src="/rocketlArrow.png"
          alt="Hero Image"
          width={100}
          height={100}
          className="max-w-[50px]"
        />
      </div>
      {/*  */}
      <div className="lg:px-20 px-6" id="service">
        <motion.div
          initial={{ opacity: 0.8, scale: 1, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex gap-5 items-center"
        >
          <h1 className="text-yc text-2xl md:text-3xl lg:text-4xl">
            Our Vehicles
          </h1>
          <Image
            src="/vehicle.svg"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[30px] lg:max-w-[40px]"
          />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10 pt-10 font-bold">
          <motion.div
            initial={{ opacity: 0.8, scale: 1, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-fit rounded-md overflow-hidden"
          >
            <Image
              src="/omni.png"
              alt="Hero Image"
              width={1000}
              height={1000}
              className="rounded-md hover:scale-105 object-cover duration-200"
            />
            <div className="bg-secondary pl-5 pr-10 py-3 rounded-tr-full absolute bottom-0 left-0 text-white">
              <h1 className="text-xl">Eicher</h1>
              <p>(40 Seater)</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.8, scale: 1, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-fit rounded-md overflow-hidden"
          >
            <Image
              src="/excelo.png"
              alt="Hero Image"
              width={1000}
              height={1000}
              className="rounded-md hover:scale-105 object-cover duration-200"
            />
            <div className="bg-secondary pl-5 pr-10 py-3 rounded-tr-full absolute bottom-0 left-0 text-white">
              <h1 className="text-xl">Mahindra</h1>
              <p>(50 Seater)</p>
            </div>
          </motion.div>
        </div>
        <div className="w-full flex justify-end">
          <Image
            src="/rocketArrow2.png"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[100px] lg:mr-20"
          />
        </div>
      </div>
      {/*  */}
      <div className="lg:px-20 px-6" id="faq">
        <motion.div
          initial={{ opacity: 0.8, scale: 1, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex gap-5 items-center pt-2"
        >
          <h1 className="text-yc text-xl md:text-3xl lg:text-4xl">
            We&apos;re Here To Help: FAQ
          </h1>
          <span className="inline-block">
            <Image
              src="/faq.svg"
              alt="Hero Image"
              width={100}
              height={100}
              className="max-w-[30px] lg:max-w-[40px]"
            />
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.8, scale: 1, y: 150 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=""
        >
          <FaqAccordion />
        </motion.div>

        <div className="flex ">
          <Image
            src="/rocketlArrow.png"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[50px] w-auto lg:ml-20"
          />
        </div>
      </div>

      {/* testimonials */}
      <div id="testimonials" className="lg:px-20 px-6 scroll-mt-[120px]">
        <div className="">
          <motion.h1
            initial={{ opacity: 0.8, scale: 1, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-yc md:flex gap-5 text-2xl md:text-3xl lg:text-4xl"
          >
            What Our Customers{" "}
            <span className="flex items-center gap-5">
              {" "}
              Say{" "}
              <Image
                src="/smile.svg"
                alt="Hero Image"
                width={100}
                height={100}
                className="max-w-[30px] lg:max-w-[40px]"
              />
            </span>
          </motion.h1>
        </div>
        <div className="flex justify-end">
          <Image
            src="/rarrow.svg"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[30px] lg:max-w-[40px]"
          />
        </div>
        <motion.div
          initial={{ opacity: 0.8, scale: 1, x: 150 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex gap-5 overflow-scroll no-scrollbar"
        >
          <VideoPlayer
            videoSrc="/videos/interview_1.mp4"
            thumbnailSrc="/testimonials/tm1.png"
            title="Venkatesh"
            subtitle="Burma Automobiles"
            rating={5}
            posterImage="/testimonials/tl1.png"
          />

          <VideoPlayer
            videoSrc="/videos/interview_2.mp4"
            thumbnailSrc="/testimonials/tm2.png"
            title="Chethan"
            subtitle="OffSpot"
            rating={5}
            posterImage="/testimonials/tl2.png"
          />

          {/* <VideoPlayer
            videoSrc="/videos/interview_3.mp4"
            thumbnailSrc="/testimonials/tl3.png"
            title="Saraswathi"
            subtitle="Padikkal Travels"
            rating={5}
            posterImage="/testimonials/tl3.png"
          /> */}
        </motion.div>
        <div className="w-full flex justify-end">
          <Image
            src="/rocketArrow2.png"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[100px] lg:mr-20"
          />
        </div>
      </div>
      {/*  */}
      <div className="lg:px-20 px-3 pb-10">
        <motion.div
          initial={{ opacity: 0.8, scale: 1, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex gap-5 px-3 lg:px-0 items-center"
        >
          <h1 className="text-yc text-2xl md:text-3xl lg:text-4xl">
            Contact Us{" "}
          </h1>
          <Image
            src="/phone.svg"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[30px] lg:max-w-[40px]"
          />
        </motion.div>
        <div id="contact" className="lg:px-10 pt-10 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0.8, scale: 1, y: 150 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-[#FFF8F2] w-full grid lg:grid-cols-2 lg:py-8 lg:px-20 rounded-xl  p-5"
          >
            <div className="">
              <h1 className="lg:text-5xl text-3xl lg:pt-10 text-yc lg:max-w-[370px]">
                More Than Just a Ride:{" "}
                <span className="text-[#453069]">
                  {" "}
                  Safe, Friendly, and{" "}
                  <span className="flex gap-3">
                    Reliable
                    <Image
                      src="/smiley.svg"
                      alt="Hero Image"
                      width={200}
                      height={200}
                      className="lg:max-w-[60px] max-w-[30px]"
                    />
                  </span>
                </span>{" "}
              </h1>
              <p className="text-gray-600 md:text-xl pt-3">
                Are you looking for a safe and enjoyable transport? Reach out to
                us.
              </p>
              <div className="md:flex grid lg:pt-10 py-5 gap-5 text-[#453069]">
                <div className="">
                  <h1 className="text-xl font-semibold">Phone Number</h1>
                  <Link
                    href={"tel:08046333629"}
                    className="flex gap-5 items-center"
                  >
                    <FaPhone />
                    <h1>08040546060</h1>
                  </Link>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">Email</h1>
                  <Link
                    href={"mailto:padikkaltt@gmail.com"}
                    className="flex gap-5 items-center"
                  >
                    <TbMailFilled className="text-xl" />
                    <h1>padikkaltt@gmail.com</h1>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Form />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
