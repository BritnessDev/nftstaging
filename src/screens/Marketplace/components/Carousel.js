import NFTGeometricCard from "components/NFTGeometricCard"
import React from "react"
import Carousel from "react-grid-carousel"
import {
  ArrowBtn,
  SeeAllContainer,
  SliderContainer,
  SliderHeading,
} from "../styles/SliderStyling"

export const CarouselSlider = ({ nftCards, heading, second }) => {
  return (
    <>
      <SliderContainer second={second}>
        <SliderHeading second={second}>{heading}</SliderHeading>
        <Carousel
          cols={2}
          rows={2}
          gap={10}
          showDots={false}
          arrowLeft={<ArrowBtn type="left" />}
          arrowRight={<ArrowBtn type="right" />}
        >
          {nftCards.map(
            ({
              id,
              imgSrc,
              title,
              price,
              priceUSD,
              sport,
              brickColor,
              speed,
              dexterity,
              stamina,
              dribbling,
              finishing,
            }) => (
              <Carousel.Item key={id}>
                <NFTGeometricCard
                  imageUrl={imgSrc}
                  brickColor={brickColor}
                  text={sport}
                  playerName={title}
                  usdValue={priceUSD}
                  cryptoValue={price}
                  speed={speed}
                  dexterity={dexterity}
                  stamina={stamina}
                  dribbling={dribbling}
                  finishing={finishing}
                />
              </Carousel.Item>
            ),
          )}
          <Carousel.Item key={12}>
            <SeeAllContainer>
              <p>See All</p>
            </SeeAllContainer>
          </Carousel.Item>
        </Carousel>
      </SliderContainer>
    </>
  )
}
