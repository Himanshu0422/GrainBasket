"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Nunito } from "next/font/google";

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose weights you need
  variable: "--font-nunito", // optional for CSS variable
});

const HomeSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden" id="home">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/home.png')",
        }}
      />
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
        style={{
          backgroundImage: "url('/packet.png')",
        }}
      /> */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center text-white mx-auto">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${nunito.variable}`}
          >
            Wholesome Flour, Straight from the Mill
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light mb-12 opacity-90">
            Pure. Fresh. Locally Milled.
          </p>
          <Button
            variant="link"
            size="lg"
            className="bg-transparent border-white text-white transition-colors duration-300 px-8 py-3 text-lg font-medium cursor-pointer"
            onClick={() => {
              window.location.href = "#contact";
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </div>
  );
};

export default HomeSection;
