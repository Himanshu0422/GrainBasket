import Image from "next/image";

const plantImages = [
  "/plant/plant1.jpg",
  "/plant/plant2.jpg",
  "/plant/plant3.jpg",
  "/plant/plant4.jpg",
  "/plant/plant5.jpg",
  "/plant/plant6.jpg",
];

const PlantGallerySection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50" id="plants">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Plant</h2>
        <p className="text-gray-600 mb-12">
          Take a look at our modern and clean flour processing units
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plantImages.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow hover:shadow-lg transition"
            >
              <Image
                src={src}
                alt={`Plant ${idx + 1}`}
                width={500}
                height={350}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantGallerySection;
