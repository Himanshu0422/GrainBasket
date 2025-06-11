import AboutSection from "./_components/AboutSection";
import ContactSection from "./_components/ContactSection";
import HomeSection from "./_components/Home";
import ProductsSection from "./_components/ProductsSection";
import WhyChooseUsSection from "./_components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}
