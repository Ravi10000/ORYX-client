import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1700 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 900 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
  },
};

const CarouselX = ({ children }) => {
  return (
    <Carousel
      // className="grid grid-flow-row auto-rows-max gap-5 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center"
      containerClass="carousel-container"
      responsive={responsive}
      infinite={true}
      // showDots={true}
      swipeable={false}
      arrows={true}
    >
      {children}
    </Carousel>
  );
};

export default CarouselX;
