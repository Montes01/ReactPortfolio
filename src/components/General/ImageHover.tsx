import React from "react";
import { IconLink } from "@tabler/icons-react";

interface ImageHoverProps {
  deployUrl?: string;
}

const ImageHover: React.FC<ImageHoverProps> = ({ deployUrl }) => {
  return deployUrl ? (
    <a
      href={deployUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute z-10 grid place-content-center w-full h-full top-0 backdrop-brightness-[0.3] opacity-0 hover:opacity-100 transition-opacity"
    >
      <IconLink className="h-9 w-9 text-white font-black" />
    </a>
  ) : (
    <div className="absolute z-10 grid place-content-center w-full h-full top-0 backdrop-brightness-[0.3] opacity-0 hover:opacity-100 transition-opacity">
      <span className="font-bold text-white text-center tiny:text-sm select-none text-xl drop-shadow-[0_2px_2px_black]">
        This project is not deployed yet
      </span>
    </div>
  );
};

export default ImageHover;
