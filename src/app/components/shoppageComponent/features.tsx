import React from "react";
import Image, { StaticImageData } from "next/image";

import image1 from "@/app/assets/shop page/1.png";
import image2 from "@/app/assets/shop page/2.png";
import image3 from "@/app/assets/shop page/3.png";
import image4 from "@/app/assets/shop page/4.png";

interface Feature {
  image: StaticImageData;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    image: image1,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    image: image2,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    image: image3,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    image: image4,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const Features = () => {
  return (
    <div className="w-[1440px] h-[270px] flex justify-around items-center bg-[#FAF3EA] p-[100px] border border-gray-200 rounded-lg">
      {features.map((feature, index) => (
        <div key={index}>
          <div className="flex  items-center  space-y-2 max-w-xs">
            <Image src={feature.image} alt={feature.title} className="w-[60px] h-[60px]" />
           <div>
            <h3 className=" font-Poppins text-[25px] leading-[37.5px] font-semibold text-[#242424]">{feature.title}</h3>
            <p className="font-Poppins font-medium text-xl leading-[30px] text-[#898989]">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;