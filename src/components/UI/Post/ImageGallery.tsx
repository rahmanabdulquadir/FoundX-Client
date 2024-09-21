"use client";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";

type IProps = {
  images: string[];
};

const ImageGallery = ({ images }: IProps) => {
  return (
    <LightGallery
      elementClassNames={`mt-2 grid gap-2 grid-cols-2 place-items-center ${images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
      plugins={[lgThumbnail, lgZoom]}
      speed={500}
    >
      {images?.map((image, index) => (
        <Link
          className={`w-full ${images.length === 3 && index === 0 ? "col-span-2" : "col-span-1"}`}
          key={index}
          href={image}
        >
          <Image className="h-[400px] w-full object-cover" src={image} height={500} width={500} alt={`image- ${index}`} />
        </Link>
      ))}

      <a href="img/img1.jpg">
        <img alt="img1" src="img/thumb1.jpg" />
      </a>
      <a href="img/img2.jpg">
        <img alt="img2" src="img/thumb2.jpg" />
      </a>
    </LightGallery>
  );
};

export default ImageGallery;
