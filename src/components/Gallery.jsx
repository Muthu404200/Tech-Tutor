import { useState } from "react";

// ✅ Import local images
import img1 from "../assets/gallery/img1.jpeg";
import img2 from "../assets/gallery/img2.jpeg";
import img3 from "../assets/gallery/img3.jpeg";
import img4 from "../assets/gallery/img4.jpeg";
import img5 from "../assets/gallery/img5.jpeg";
import img6 from "../assets/gallery/img6.jpeg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Image array
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Gallery
        </h2>
        <p className="mt-4 text-gray-500">
          Moments from our classes and activities
        </p>
      </div>

      {/* ✅ Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* ✅ Modal Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-5xl w-full rounded-2xl"
          />
        </div>
      )}
    </section>
  );
}