export const sliderSettings = {
  className: "center",
  // centerMode: true,
  centerPadding: "50px",
  arrows: false,
  dots: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  slidesPerRow: 2,
  responsive: [
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        swipeToSlide: true,
        dots: false,
        arrows: false,
        infinite: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        dots: false,
        arrows: false,
        infinite: false,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        dots: false,
        arrows: false,
        infinite: false,
      },
    },
  ],
}
