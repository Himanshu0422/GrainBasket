// import { MapPin } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-[#f9f9f9]" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-8">About</h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              RP Industry is a trusted local mill dedicated to producing fresh,
              chemical-free flour for our community. We believe in traditional
              milling methods combined with modern quality standards.
            </p>
            <p>
              Located in Gazipur, Tehsil Naraingarh, Haryana, we serve local
              households and small businesses with premium quality flour
              products that maintain their natural nutrition and flavor.
            </p>
          </div>

          {/* Location */}
          {/* <div className="flex items-center gap-2 text-gray-700 pt-6 text-base">
            <MapPin className="w-5 h-5 text-black" />
            <span>Gazipur, Tehsil Naraingarh, Haryana</span>
          </div> */}
        </div>

        {/* Right Images */}
        <div className="flex gap-4 h-full max-md:flex-col">
          <div className="relative md:w-1/2 aspect-[4/3] h-64 rounded-lg overflow-hidden">
            <Image
              src="/image1.jpeg"
              alt="Fresh dough"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative md:w-1/2 w-full aspect-[4/3] h-64 rounded-lg overflow-hidden self-end">
            <Image
              src="/image3.jpg"
              alt="Flour with eggs"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
