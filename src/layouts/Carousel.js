import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "./Carousel.css";

const items = [
  {
    src: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Diwali2019/Rishab/Auto_Biss/BISS_GW_Hero/BISS_1500x600-RECb_Jan._CB411491151_.jpg',
    altText: '',
    caption: ''
  },
  {
    src: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/kitchen/Herotators/XCM_Manual_1231691_1222782_IN_in_x999_store_in_en_3179209_1500x600_en_IN._CB410654551_.jpg',
    altText: '',
    caption: ''
  },
  {
    src: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Nokia/5.3/Dec/V240911677_IN_WLME_Nokia_5.3_LP_Tall_hero_1500x600._CB412602534_.jpg',
    altText: '',
    caption: ''
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <>
      <div id='car'>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      </div>
    </>
  );
}

export default Example;