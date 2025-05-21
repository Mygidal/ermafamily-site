'use client';
import Image from 'next/image';
import { useState } from 'react';

const galleryImages = Array.from({ length: 30 }, (_, i) => `/gallery/gallery-${String(i + 1).padStart(2, '0')}.jpg`);

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="pt-[100px] pb-10 px-4 max-w-[1280px] mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-blue-900 text-center mb-10">
        Галерия
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryImages.map((src, index) => (
          <button
            key={index}
            className="aspect-square overflow-hidden rounded-md"
            onClick={() => setActiveImage(src)}
          >
            <Image
              src={src}
              alt={`Галерия ${index + 1}`}
              width={300}
              height={300}
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-3xl w-full max-h-[90vh]">
            <Image
              src={activeImage}
              alt="Голяма снимка"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg object-contain"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-2 right-2 text-white text-2xl"
              aria-label="Затвори"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
