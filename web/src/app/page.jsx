import FaqAccordion from "@/components/ui/FaqAccordion";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const herodata = {
  schools: 20,
  students: 1000,
};
export default function Home() {
  return (
    <div className="">
      {/* hero */}
      <div className="lg:px-20 md:px-10 px-6 lg:pt-20 pt-10 ">
        <div className="grid lg:grid-cols-2">
          <div className="">
            <h1 className="xl:text-[40px] text-[30px] text-start text-primary jakarta font-[510] lg:leading-[50px]">
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
            </h1>
            <p className="lg:text-[22px] text-lb pr-5 text-justify">
              We believe every journey is an opportunity for learning . We
              provide the safe and reliable transportation to get you there.
            </p>
            <div className="pl-[180px] lg:mt-[-10px]">
              <Image
                src="/heroArrow.png"
                alt="Hero Image"
                width={100}
                height={100}
                className="max-w-[60px] lg:flex hidden"
              />
            </div>
            <div className="lg:flex hidden">
              <Link
                href={"/"}
                className="hover:text-black duration-200 text-white bg-tertiary py-[10px] px-7 rounded-md border border-white shadow-2xl "
              >
                Get Started
              </Link>
            </div>
            <div className="pt-5 mt-10 bg-secondary p-3 rounded-md text-tertiary hidden lg:grid grid-cols-2 divide-x divide-tertiary w-fit">
              <div className="text-center px-5">
                <h1 className="lg:text-3xl">{herodata.schools}+</h1>
                <h1>Schools</h1>
              </div>
              <div className="text-center px-5">
                <h1 className="lg:text-3xl">{herodata.students}+</h1>
                <h1>Students</h1>
              </div>
            </div>
          </div>
          <div className="lg:flex hidden">
            <Image
              src="/heroimg.png"
              alt="Hero Image"
              width={1920}
              height={800}
              className=""
            />
          </div>
        </div>
        <div className="lg:hidden relative">
          <div className="flex justify-center">
            <div className="">
              <div className="relative max-w-[500px]">
                <Image
                  src="/heroimgsm.png"
                  alt="Hero Image"
                  width={1000}
                  height={1000}
                  className="lg:hidden flex pt-5"
                />
                <div className=" bg-secondary p-3 text-sm rounded-md text-tertiary grid grid-cols-2 divide-x divide-tertiary w-fit absolute bottom-0 md:bottom-5 right-0">
                  <div className="text-center px-5">
                    <h1 className="lg:text-3xl">{herodata.schools}+</h1>
                    <h1>Schools</h1>
                  </div>
                  <div className="text-center px-5">
                    <h1 className="lg:text-3xl">{herodata.students}+</h1>
                    <h1>Students</h1>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-[-20px] pr-5">
                <div className="">
                  <Image
                    src="/heroArrow.png"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    className="max-w-[60px] float-right mr-16"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <Link
                  href={"/"}
                  className="hover:text-black h-fit duration-200 text-white bg-tertiary py-[10px] px-7 rounded-md border border-white shadow-2xl "
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
        </div>
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
      <div className="lg:px-20 md:px-10 px-6 w-full lg:pt-10">
        <div className="flex gap-5 items-center">
          <h1 className="text-primary text-2xl md:text-3xl lg:text-4xl">
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
          <Image
            src="/aboutimg.png"
            alt="Hero Image"
            width={1000}
            height={1000}
            className=""
          />
          <div className="lg:pt-10">
            <p className="lg:text-[22px] text-lb text-justify">
              Padikkal Travels Private Limited is a renowned brand in the bus
              operating industry. Our vision is to give a new face to the bus
              industry. Since our inception passenger comfort has been our top
              priority. We have frequently added luxury buses to our huge fleet
              of buses. The only thing we focus on is that the comfort quotient
              of our passengers should never be compromised.
            </p>
            <div className="pt-5">
              <Link
                href={"/"}
                className="hover:text-black h-fit duration-200 text-white bg-tertiary py-[10px] px-7 rounded-md border border-white shadow-2xl "
              >
                Learn More
              </Link>
            </div>
          </div>
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
      <div className="lg:px-20 px-6">
        <div className="flex gap-5 items-center">
          <h1 className="text-primary text-2xl md:text-3xl lg:text-4xl">
            Why Choose us
          </h1>
          <Image
            src="/question.svg"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[30px] lg:max-w-[40px]"
          />
        </div>
        <div className="pt-10 grid md:grid-cols-3 gap-x-8 gap-y-5">
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
      {/* our partner */}
      <div className="lg:px-20 px-6 bg-secondary py-10">
        <div className="lg:flex justify-between">
          <div className="flex gap-5 items-center">
            <h1 className="text-primary text-2xl md:text-3xl lg:text-4xl">
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
            We&nbsp;re proud to support these institutions learning journey
          </p>
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
        <div className="py-10 flex items-end gap-8 overflow-scroll no-scrollbar">
          <div className="relative">
            <Image
              src="/ps1.png"
              alt="Hero Image"
              width={1000}
              height={1000}
              className="rounded-md min-w-[320px] lg:min-w-[340px]"
            />
            <div className="absolute bottom-0 text-white px-5 pb-5 ">
              <h1 className="text-xl">School Name</h1>
              <p>Place</p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/ps2.png"
              alt="Hero Image"
              width={1000}
              height={1000}
              className="rounded-md min-w-[320px] lg:min-w-[340px]"
            />
            <div className="absolute bottom-0 text-white px-5 pb-5 ">
              <h1 className="text-xl">School Name</h1>
              <p>Place</p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/ps3.png"
              alt="Hero Image"
              width={1000}
              height={1000}
              className="rounded-md min-w-[320px] lg:min-w-[340px]"
            />
            <div className="absolute bottom-0 text-white px-5 pb-5 ">
              <h1 className="text-xl">School Name</h1>
              <p>Place</p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/ps4.png"
              alt="Hero Image"
              width={1000}
              height={1000}
              className="rounded-md min-w-[320px] lg:min-w-[340px]"
            />
            <div className="absolute bottom-0 text-white px-5 pb-5 ">
              <h1 className="text-xl">School Name</h1>
              <p>Place</p>
            </div>
          </div>
        </div>
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
      <div className="lg:px-20 px-6">
        <div className="flex gap-5 items-center">
          <h1 className="text-primary text-2xl md:text-3xl lg:text-4xl">
            Our Vehicles
          </h1>
          <Image
            src="/vehicle.svg"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[30px] lg:max-w-[40px]"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-10 pt-10">
          <div className="relative w-fit rounded-md overflow-hidden">
            <Image
              src="/omni.png"
              alt="Hero Image"
              width={1000}
              height={1000}
              className="rounded-md hover:scale-105 object-cover duration-200"
            />
            <div className="bg-secondary pl-5 pr-10 py-3 rounded-tr-full absolute bottom-0 left-0 text-primary">
              <h1 className="text-xl">OMNI</h1>
              <p>(6 Seater)</p>
            </div>
          </div>
          <div className="relative w-fit rounded-md overflow-hidden">
            <Image
              src="/excelo.png"
              alt="Hero Image"
              width={1000}
              height={1000}
              className="rounded-md hover:scale-105 object-cover duration-200"
            />
            <div className="bg-secondary pl-5 pr-10 py-3 rounded-tr-full absolute bottom-0 left-0 text-primary">
              <h1 className="text-xl">EXCELO</h1>
              <p>(18 Seater)</p>
            </div>
          </div>
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
      <div className="lg:px-20 px-6">
        <div className="flex gap-5 items-center pt-2">
          <h1 className="text-primary text-xl md:text-3xl lg:text-4xl">
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
        </div>
        <FaqAccordion />
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

      {/*  */}
      <div className="lg:px-20 px-6">
        <div className="">
          <h1 className="text-primary md:flex gap-5 text-2xl md:text-3xl lg:text-4xl">
            What Our Customers <span className="flex items-center gap-5"> Say{" "}
          <Image
            src="/smile.svg"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[30px] lg:max-w-[40px]"
          /></span>
          </h1>
         
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
        <div className="pt-10 grid md:grid-cols-2 gap-x-8 gap-y-5">
          <Image
            src="/c1.png"
            alt="Hero Image"
            width={1000}
            height={1000}
            className=""
          />
          <Image
            src="/c2.png"
            alt="Hero Image"
            width={1000}
            height={1000}
            className=""
          />
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
      <div className="lg:px-20 px-3 pb-10">
        <div className="flex gap-5 px-3 lg:px-0 items-center">
          <h1 className="text-primary text-2xl md:text-3xl lg:text-4xl">
            Contact Us{" "}
          </h1>
          <Image
            src="/phone.svg"
            alt="Hero Image"
            width={100}
            height={100}
            className="max-w-[30px] lg:max-w-[40px]"
          />
        </div>
        <div className="lg:px-10 pt-10">
          <div className="bg-secondary w-full grid lg:grid-cols-2 lg:py-8 lg:px-20 rounded-xl  p-5">
            <div className="">
              <h1 className="lg:text-5xl md:text-3xl text-2xl lg:pt-10 text-primary lg:max-w-[370px]">
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
                  <div className="flex gap-5 items-center">
                    <FaPhone />
                    <h1>08046333629</h1>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">Email</h1>
                  <div className="flex gap-5 items-center">
                    <TbMailFilled className="text-xl" />
                    <h1>padikkaltt@gmail.com</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <form
                action=""
                className="bg-[#FFFFE5] border rounded-xl p-5 lg:p-10 grid gap-7 border-gray-300"
              >
                <div className="grid gap-2">
                  <label htmlFor="" className="lg:text-xl">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="jacob"
                    className="bg-white border border-gray-300  py-2 px-5 rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="" className="lg:text-xl">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="jacob@gmail.com"
                    className="bg-white border border-gray-300  py-2 px-5 rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="" className="lg:text-xl">
                    Address
                  </label>
                  <textarea
                    name="address"
                    id="address"
                    placeholder="Type your Address here...."
                    className="bg-white border min-h-[150px] border-gray-300  py-2 px-5 rounded-md"
                  ></textarea>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="text-white px-4 py-2 bg-primary rounded-full flex gap-5 items-center"
                  >
                    Send
                    <Image
                      src="/send.svg"
                      alt="Hero Image"
                      width={100}
                      height={100}
                      className="max-w-[30px] lg:max-w-[40px]"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
