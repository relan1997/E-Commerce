import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../../Data/mens_kurta";

const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 5.5 },
};

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  

  const items = mens_kurta.slice(0, 10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const slideNext = () => {
    if (activeIndex < items.length - Math.ceil(responsive[1024].items)) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const syncActiveIndex = ({ item }) => {
    console.log("Active Index:", item);
    setActiveIndex(item);
  };

  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}

          disableDotsControls
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
        />    
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
