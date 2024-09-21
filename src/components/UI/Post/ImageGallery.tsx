"use client"

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
    <LightGallery plugins={[lgThumbnail, lgZoom]} speed={500}>
      {images?.map((image, index) => (
        <Link key={index} href={image}>
          <Image src={image} height={500} width={500} alt={`image- ${index}`} />
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
