import React from "react";
import SwipeCarousel from "../carousel/Swipe";
import HorizontalScroll from "../carousel/HorizontalScroll";

const CombinedCarousel = () => {
  return (
    <div>
      <SwipeCarousel />
      <HorizontalScroll />
    </div>
  );
};

export default CombinedCarousel;
