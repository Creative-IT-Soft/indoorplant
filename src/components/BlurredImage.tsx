import Image from "next/image";
import React from "react";

interface BlurredImageProps {
  backgroundImage: string;
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export default function BlurredImage({
  backgroundImage,
  src,
  alt = "",
  width,
  height,
  className = "",
  imageClassName = "",
  priority = false,
}: BlurredImageProps) {
  const paddingTop = `${(height / width) * 100}%`;

  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full" style={{ paddingTop }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 50vw"
          placeholder="blur"
          blurDataURL={backgroundImage}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          className={`object-contain ${imageClassName}`}
        />
      </div>
    </div>
  );
}
