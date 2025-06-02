import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <div className="w-full relative">
        <Image
          src="/about_hero.png"
          alt="About Hero"
          width={1920}
          height={1080}
          className="object-contain z-0"
        />
        <div className="absolute lg:inset-y-0 bg-opacity-40 lg:flex lg:items-center lg:justify-center px-4 md:px-10 bottom-10">
          <h1 className="text-white font-semibold text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-6xl leading-snug tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            <span className="text-primary">Our</span> passion for travel{" "}
            <span className="text-primary">drives us to</span> create
            unforgettable experiences.
          </h1>
        </div>
      </div>
      <div className="flex justify-end lg:px-20 mt-[-20px] z-1 relative px-5">
        <div className="rounded-xl bg-secondary text-dt">
          <h1 className="lg:text-3xl md:text-2xl font-[500] lg:p-8 p-3">
            12 Years of Travelling
          </h1>
        </div>
      </div>
      <div className="lg:px-20 md:px-12 px-8 py-5">
        <h1 className="lg:text-3xl text-2xl text-dt">
          Our Origin: How we started
        </h1>
        <p className="lg:text-2xl md:text-xl text-md text-lb md:leading-[40px] leading-[30px] lg:py-10 py-5 text-justify">
          Padikkal Travels Private Limited is a renowned brand in the bus
          operating industry. Our vision is to give a new face to the bus
          industry. Since our inception passenger comfort has been our top
          priority. We have frequently added luxury buses to our huge fleet of
          buses. The only thing we focus on is that the comfort quotient of our
          passengers should never be compromised. We have always tried our best
          to push our limits in order to develop our travel experience. Read
          further to understand what we offer that enhances our reputation in
          the market.
        </p>
      </div>
      <div className="lg:px-20 md:px-12 px-8 py-5">
        <h1 className="lg:text-4xl text-2xl text-dt">Features</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5 gap-x-10">
          <div className="">
            <Image src="/ac1.png" width={1000} height={1000} alt="" />
          </div>
          <div className="flex items-center">
            <div className="">
              <h1 className="lg:text-3xl text-xl text-dt">
                Live Bus Tracking{" "}
              </h1>
              <p className="lg:text-2xl md:text-xl text-md text-lb md:leading-[40px] leading-[30px] lg:py-10 py-3 text-justify">
                We have integrated this great technology of live bus tracking in
                almost all of our buses. This helps the passengers to be
                informed about the live position of the bus, thus helping them
                in planning their commute to the bus stand.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 gap-x-10 py-5">
          <div className="order-1 lg:order-2">
            <Image src="/ac2.png" width={1000} height={1000} alt="" />
          </div>
          <div className="flex items-center order-2 lg:order-1">
            <div className="">
              <h1 className="lg:text-3xl text-xl text-dt">Great Comfort</h1>
              <p className="lg:text-2xl md:text-xl text-md text-lb md:leading-[40px] leading-[30px] lg:py-10 py-3 text-justify">
                Now, once a passenger boards the bus he will be surprised by the
                inner comfort of the bus. The buses have all the latest
                amenities like WiFi, charging point, water bottle and central
                TV. The seats are really very comfortable and create a feeling
                of a cosy bedroom.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-20 md:px-12 px-8 py-5">
        <h1 className="lg:text-3xl text-xl text-dt">Our Visual Journey</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="relative">
              <Image
                src={`/about/${index + 1}.jpg`}
                alt="Hero Image"
                width={1000}
                height={1000}
                className="rounded-xl object-fill"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:px-20 md:px-12 px-8 py-5">
        <h1 className="lg:text-2xl text-xl text-dt text-center">
          Ready to embark on a journey with a great comfort for you?
        </h1>
        <div className="pt-10 flex justify-center">
          <Link
            href={"/#contact"}
            className="hover:text-black h-fit duration-200 text-white bg-yc py-[10px] px-7 rounded-md shadow-inner shadow-secondary"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
