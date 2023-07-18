import React from "react"
// import Carousel from "react-grid-carousel"
import BoosterCard from "./BoosterCard"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { IconButton } from "./Button";
import LeftArrow from "../../../images/left-arrow.svg"
import RightArrow from "../../../images/right-arrow.svg"
import { SeeButton } from "../styles/BoosterCardStyling";

const BoosterSlider = ({ nfts }) => {
  const responsive = {
    0: { items: 1 },
    450: { items: 2 },
    768: { items: 3 },
    1000: { items: 4 },
    1220: { items: 5 },
    1560: { items: 6 },
    1920: { items: 8 },
  };

  const items = nfts.map((card, key) => <div data-value={key}>
    <BoosterCard card={card} />
  </div>)

  const renderNextButton = () => {
    return (
      <IconButton>
        <img src={RightArrow}></img>
      </IconButton>
    )
  }
  const renderPrevButton = () => {
    return (
      <IconButton>
        <img src={LeftArrow}></img>
      </IconButton>
    )
  }
  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        disableDotsControls={true}
        loop={true}
        infinite={true}
      />
      <SeeButton>
        See All
      </SeeButton>
    </div>
  )
}

export default BoosterSlider
