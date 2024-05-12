import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2, itemsToScroll: 1 },
  { width: 1100, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 4 },
  { width: 1920, itemsToShow: 4 },
];

const InfiniteCarousel = ({ children }) => {
  let carouselRef = useRef();

  return (
    <>
      <Carousel
        breakPoints={breakPoints}
        enableSwipe={true}
        showArrows={false}
        pagination={false}
        enableAutoPlay={true}
        ref={(ref) => (carouselRef = ref)}
      >
        {children}
      </Carousel>
    </>
  );
};

export default InfiniteCarousel;
