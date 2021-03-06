import { SlickArrowLeft, SlickArrowRight } from '../components/CarouselArrows'


const homeCarouselSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
}

const workCarouselSettings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
}

export {homeCarouselSettings, workCarouselSettings}