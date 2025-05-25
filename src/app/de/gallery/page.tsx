"use client";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const photoFiles = [
    "/gallery/gallery-photo-01.jpeg",
    "/gallery/gallery-photo-02.jpg",
    "/gallery/gallery-photo-03.png",
    "/gallery/gallery-photo-04.png",
    "/gallery/gallery-photo-05.png",
    "/gallery/gallery-photo-06.png",
    "/gallery/gallery-photo-07.png",
    "/gallery/gallery-photo-08.png",
    "/gallery/gallery-photo-09.png",
    "/gallery/gallery-photo-10.jpeg",
    "/gallery/gallery-photo-100.jpg",
    "/gallery/gallery-photo-101.png",
    "/gallery/gallery-photo-102.png",
    "/gallery/gallery-photo-103.png",
    "/gallery/gallery-photo-104.jpg",
    "/gallery/gallery-photo-105.png",
    "/gallery/gallery-photo-106.jpg",
    "/gallery/gallery-photo-107.png",
    "/gallery/gallery-photo-108.png",
    "/gallery/gallery-photo-109.png",
    "/gallery/gallery-photo-11.jpg",
    "/gallery/gallery-photo-110.png",
    "/gallery/gallery-photo-111.png",
    "/gallery/gallery-photo-112.png",
    "/gallery/gallery-photo-113.jpg",
    "/gallery/gallery-photo-114.jpg",
    "/gallery/gallery-photo-115.jpg",
    "/gallery/gallery-photo-116.jpg",
    "/gallery/gallery-photo-117.jpg",
    "/gallery/gallery-photo-118.jpg",
    "/gallery/gallery-photo-119.jpg",
    "/gallery/gallery-photo-12.png",
    "/gallery/gallery-photo-120.jpg",
    "/gallery/gallery-photo-121.jpg",
    "/gallery/gallery-photo-122.jpg",
    "/gallery/gallery-photo-123.jpg",
    "/gallery/gallery-photo-124.jpg",
    "/gallery/gallery-photo-125.jpg",
    "/gallery/gallery-photo-126.jpg",
    "/gallery/gallery-photo-127.jpg",
    "/gallery/gallery-photo-128.jpg",
    "/gallery/gallery-photo-13.JPG",
    "/gallery/gallery-photo-14.png",
    "/gallery/gallery-photo-15.png",
    "/gallery/gallery-photo-16.png",
    "/gallery/gallery-photo-17.png",
    "/gallery/gallery-photo-18.png",
    "/gallery/gallery-photo-19.png",
    "/gallery/gallery-photo-20.png",
    "/gallery/gallery-photo-21.jpg",
    "/gallery/gallery-photo-22.png",
    "/gallery/gallery-photo-23.jpg",
    "/gallery/gallery-photo-24.jpg",
    "/gallery/gallery-photo-25.jpg",
    "/gallery/gallery-photo-26.jpg",
    "/gallery/gallery-photo-27.jpg",
    "/gallery/gallery-photo-28.jpg",
    "/gallery/gallery-photo-29.jpg",
    "/gallery/gallery-photo-30.jpg",
    "/gallery/gallery-photo-31.jpg",
    "/gallery/gallery-photo-32.jpg",
    "/gallery/gallery-photo-33.jpg",
    "/gallery/gallery-photo-34.png",
    "/gallery/gallery-photo-35.jpg",
    "/gallery/gallery-photo-36.jpg",
    "/gallery/gallery-photo-37.jpg",
    "/gallery/gallery-photo-38.jpg",
    "/gallery/gallery-photo-39.jpg",
    "/gallery/gallery-photo-40.jpg",
    "/gallery/gallery-photo-41.jpg",
    "/gallery/gallery-photo-42.jpg",
    "/gallery/gallery-photo-43.jpg",
    "/gallery/gallery-photo-44.jpg",
    "/gallery/gallery-photo-45.jpg",
    "/gallery/gallery-photo-46.png",
    "/gallery/gallery-photo-47.jpg",
    "/gallery/gallery-photo-48.jpg",
    "/gallery/gallery-photo-49.jpg",
    "/gallery/gallery-photo-50.jpg",
    "/gallery/gallery-photo-51.jpg",
    "/gallery/gallery-photo-52.jpg",
    "/gallery/gallery-photo-53.jpg",
    "/gallery/gallery-photo-54.jpg",
    "/gallery/gallery-photo-55.jpg",
    "/gallery/gallery-photo-56.jpg",
    "/gallery/gallery-photo-57.jpg",
    "/gallery/gallery-photo-58.jpg",
    "/gallery/gallery-photo-59.jpg",
    "/gallery/gallery-photo-60.jpg",
    "/gallery/gallery-photo-61.jpg",
    "/gallery/gallery-photo-62.jpg",
    "/gallery/gallery-photo-63.jpg",
    "/gallery/gallery-photo-64.jpg",
    "/gallery/gallery-photo-65.jpg",
    "/gallery/gallery-photo-66.jpg",
    "/gallery/gallery-photo-67.jpg",
    "/gallery/gallery-photo-68.jpg",
    "/gallery/gallery-photo-69.jpg",
    "/gallery/gallery-photo-70.jpg",
    "/gallery/gallery-photo-71.jpg",
    "/gallery/gallery-photo-72.jpg",
    "/gallery/gallery-photo-73.jpg",
    "/gallery/gallery-photo-74.jpg",
    "/gallery/gallery-photo-75.jpg",
    "/gallery/gallery-photo-76.jpg",
    "/gallery/gallery-photo-77.jpg",
    "/gallery/gallery-photo-78.jpg",
    "/gallery/gallery-photo-79.jpg",
    "/gallery/gallery-photo-80.jpg",
    "/gallery/gallery-photo-81.jpg",
    "/gallery/gallery-photo-82.jpg",
    "/gallery/gallery-photo-83.jpg",
    "/gallery/gallery-photo-84.jpg",
    "/gallery/gallery-photo-85.jpg",
    "/gallery/gallery-photo-86.jpeg",
    "/gallery/gallery-photo-87.jpg",
    "/gallery/gallery-photo-88.png",
    "/gallery/gallery-photo-89.png",
    "/gallery/gallery-photo-90.png",
    "/gallery/gallery-photo-91.png",
    "/gallery/gallery-photo-92.png",
    "/gallery/gallery-photo-93.png",
    "/gallery/gallery-photo-94.png",
    "/gallery/gallery-photo-95.png",
    "/gallery/gallery-photo-96.png",
    "/gallery/gallery-photo-97.png",
    "/gallery/gallery-photo-98.png",
    "/gallery/gallery-photo-99.jpeg",
  ];

  const videoFiles = [
    "/gallery/videos/gallery-video-01.MOV",
    "/gallery/videos/gallery-video-03.mp4",
    "/gallery/videos/gallery-video-04.mp4",
    "/gallery/videos/gallery-video-05.mp4",
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-10 pt-[100px]">
      <h1 className="font-montserrat mb-10 text-center text-3xl font-bold text-blue-900 md:text-4xl">
        Galerie
      </h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {/* Bilder */}
        {photoFiles.map((src, index) => (
          <button
            key={`img-${index}`}
            className="aspect-square overflow-hidden rounded-md"
            onClick={() => setActiveImage(src)}
          >
            <Image
              src={src}
              alt={`Galerie Bild ${index + 1}`}
              width={300}
              height={300}
              className="size-full object-cover transition hover:scale-105"
            />
          </button>
        ))}

        {/* Videos */}
        {videoFiles.map((src, index) => (
          <div
            key={`video-${index}`}
            className="group relative aspect-square overflow-hidden rounded-md"
          >
            <video
              src={src}
              controls
              className="size-full rounded-md object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
              ▶ Video {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-h-[90vh] w-full max-w-3xl">
            <Image
              src={activeImage}
              alt="Großes Bild"
              width={1200}
              height={800}
              className="h-auto w-full rounded-lg object-contain"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute right-2 top-2 text-2xl text-white"
              aria-label="Schließen"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
