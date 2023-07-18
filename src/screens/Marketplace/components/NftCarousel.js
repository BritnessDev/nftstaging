import { useEffect, useState } from "react";
import { NftCarouselContainer, NftCarouselDiv, CarouselImage } from "../styles/nftCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "../styles/nftCarousel.css"
import Card1 from '../../../../src/images/card-1.png'
import Card2 from '../../../../src/images/card-2.png'
import Card3 from '../../../../src/images/card-3.png'
import Card4 from '../../../../src/images/card-4.png'
import Card5 from '../../../../src/images/card-5.png'

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function App({onPrev, onNext, swipeCount, setSwipeCount}) {
  let xDown = null;
  const slides = [];
  const Cards = [Card1, Card2, Card3, Card4, Card5]

  function handleMouseDown(e) {
    xDown = e.clientX;
  }

  function handleMouseMove(e) {
    if (!xDown) {
      return;
    }

    const xDiff = xDown - e.clientX;

    if (Math.abs(xDiff) > 30) {
      // Swipe detected
      if (xDiff > 0) {
        // Swipe left
        onNext()
      } else {
        // Swipe right
        onPrev();
      }

      xDown = null;
    }
  }

  function handleMouseUp(e) {
    xDown = null;
  }


  const getCarouselItems = (key) => {
    // eslint-disable-next-line no-debugger
    let items = [];
    for(let i = 0; i < 5; i++)
      items.push(Cards[(i + key) % 5])
    return items;
  }


  function handleTouchStart(e) {
    xDown = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    if (!xDown) {
      return;
    }

    const xDiff = xDown - e.touches[0].clientX;

    if (Math.abs(xDiff) > 30) {
      // Swipe detected
      if (xDiff > 0) {
        // Swipe left
        onNext();
      } else {
        // Swipe right
        onPrev();
      }

      xDown = null;
    }
  }

  function handleTouchEnd(e) {
    xDown = null;
  }

  // const onPrev = () => {
  //   for(var i = 0 ; i < swipeCount ; i ++) {
  //     const swiper = document.querySelector('#swiper'+i).swiper;
  //     swiper.slidePrev();
  //   }
  // }

  // const onNext = () => {
  //   for(var i = 0 ; i <swipeCount ; i ++) {
  //     const swiper = document.querySelector('#swiper'+i).swiper;
  //     swiper.slideNext();
  //   }
  // }

  const responsiveSwipe = () => {
    if(window.innerWidth < 510)
      {
        // eslint-disable-next-line no-debugger
        // debugger
        setSwipeCount(1);
      }
      else if(window.innerWidth < 650)
      {
        // eslint-disable-next-line no-debugger
        // debugger
        setSwipeCount(2);
      }
      else if(window.innerWidth < 768)
      {
        // eslint-disable-next-line no-debugger
        // debugger
        setSwipeCount(3);
      }
      else if(window.innerWidth > 768 && window.innerWidth < 1024)
      {
        // eslint-disable-next-line no-debugger
        // debugger
        setSwipeCount(4);
      }
      else if(window.innerWidth > 1024)
      {
        // eslint-disable-next-line no-debugger
        // debugger
        setSwipeCount(5);
      }
  }
  useEffect(() => {
    responsiveSwipe();
    
    window.addEventListener('resize', responsiveSwipe);
    
    return () => {
     window.removeEventListener('resize', responsiveSwipe);
    };
    
  }, []);
  return (
    <NftCarouselContainer>
      <div className="swipers-container" style={{display: 'flex'}}
           onMouseDown={handleMouseDown}
           onMouseMove={handleMouseMove}
           onMouseUp={handleMouseUp}
           onTouchEnd={handleTouchEnd}
           onTouchMove={handleTouchMove}
           onTouchStart={handleTouchStart}
      >
        {
          new Array(swipeCount).fill(0).map((item, index) => {
            return  (
              <NftCarouselDiv className="swiper" data={index} key={index}>
                <Swiper
                  id={`swiper`+index}
                  width={300}
                  slidesPerView={1}
                  initialSlide={0}
                  centeredSlides={false}
                  slidesPerColumnFill="row"
                  spaceBetween={100}
                  loop
                  allowTouchMove={false}
                  onReachEnd={() => {
                    const tmp = slides.unshift();
                    slides.push(tmp);
                  }}
                >
                  {
                    getCarouselItems(index)?.map((item, key) => (
                      <SwiperSlide key={key} style={{ listStyle: "none" }}>
                          <CarouselImage src={item} dataIndex={index}/>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </NftCarouselDiv>
            )
          })
        }
      </div>

      {/* <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button> */}
    </NftCarouselContainer>
  );
}