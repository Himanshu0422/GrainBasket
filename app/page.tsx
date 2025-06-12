import AboutSection from "./_components/AboutSection";
import ContactSection from "./_components/ContactSection";
import Footer from "./_components/Footer";
import HomeSection from "./_components/Home";
import PlantGallerySection from "./_components/PlantGallerySection";
import ProductsSection from "./_components/ProductsSection";
import WhyChooseUsSection from "./_components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProductsSection />
      <PlantGallerySection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
