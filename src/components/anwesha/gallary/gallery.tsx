import React from "react";
import { motion } from "framer-motion";

type GalleryImage = {
  src: string;
  alt: string;
};

const Gallery: React.FC = () => {
  const images: GalleryImage[][] = [
    [
      {
        src: "https://res.cloudinary.com/dpmizx6gl/image/upload/v1738334103/IMG_4301_bzzudm.jpg",
        alt: "gallery-photo-3",
      },
     
      {
        src: "https://res.cloudinary.com/dpmizx6gl/image/upload/v1738333895/IMG_4305_zhkmsw.jpg",
        alt: "gallery-photo-4",
      },
    ],
    [
      {
        src: "https://res.cloudinary.com/dpmizx6gl/image/upload/v1738333888/ayush-18_upivj4.jpg",
        alt: "gallery-photo-1",
      },
      {
        src: "https://res.cloudinary.com/dpmizx6gl/image/upload/v1738332642/IMG_4275_iqttw4.png",
        alt: "gallery-photo-2",
      },
      {
        src: "https://res.cloudinary.com/dpmizx6gl/image/upload/v1738332640/IMG_20240316_175249_v1u5f8.jpg",
        alt: "gallery-photo-5",
      },
      {
        src: "https://res.cloudinary.com/dpmizx6gl/image/upload/v1738332638/IMG_20240317_161953_hfirlw.jpg",
        alt: "gallery-photo-6",
      },
    ],
    [
      {
        src: "https://res.cloudinary.com/dpmizx6gl/image/upload/v1738334834/IMG_20240317_173611_oe7r5h.jpg",
        alt: "gallery-photo-7",
      },
      {
        src: "https://res.cloudinary.com/dpmizx6gl/image/upload/v1738334239/kshitiz-13_o4t1ir.jpg",
        alt: "gallery-photo-8",
      },
      {
        src: "https://res.cloudinary.com/dpmizx6gl/image/upload/v1738335149/IMG_20240317_191943_cav149.jpg",
        alt: "gallery-photo-9",
      },
    ],
    [
      {
        src: "https://res.cloudinary.com/dpmizx6gl/image/upload/v1738335143/IMG_20240317_191640_lzu6za.jpg",
        alt: "gallery-photo-10",
      },
      {
        src: "https://res.cloudinary.com/dpmizx6gl/image/upload/v1738332619/IMG_4315_wod7g7.jpg",
        alt: "gallery-photo-11",
      },
      {
        src: "https://res.cloudinary.com/dpmizx6gl/image/upload/v1738334236/kshitiz-6_xrsty0.jpg",
        alt: "gallery-photo-11",
      },
    ],
  ];

  return (
    <div id="gallery" className="flex flex-col items-center justify-center mt-28 md:mx-5">
      <motion.div
          className="text-center rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}  
        >
      <h1 className="mb-10 font-black md:text-5xl text-3xl font-montserrat tracking-wider text-white">Gallery</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mx-auto" style={{ width: "80%" }}>
        {images.map((column, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {column.map((image, imgIndex) => (
              <motion.div
                key={imgIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: imgIndex * 0.2 + colIndex * 0.1,
                  ease: "easeOut",
                }}
                className="overflow-hidden"
              >
                <motion.img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={image.src}
                  alt={image.alt}
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 },
                  }}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
