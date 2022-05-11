import React, { useEffect, useState } from 'react';
import * as S from './Carousel.style';

const CAROUSEL_DATA = ['dohyeon', 'hwang', 'kyung', 'tony', 'lang'];
const DUMMY_LENGTH = 2;

const Carousel = () => {
  const [imgIdx, setImgIdx] = useState(DUMMY_LENGTH);
  const [isTransitionOn, setIsTransitionOn] = useState(true);
  const [carouselInterval, setCarouselInterval] = useState();

  useEffect(() => {
    const interval = setInterval(handleNextBtn, 2000);
    setCarouselInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (imgIdx === CAROUSEL_DATA.length + DUMMY_LENGTH) {
      setTimeout(() => {
        setImgIdx(DUMMY_LENGTH);
        setIsTransitionOn(false);
      }, 500);
    } else if (imgIdx < DUMMY_LENGTH) {
      setTimeout(() => {
        setImgIdx(CAROUSEL_WITH_DUMMY.length - 1 - DUMMY_LENGTH);
        setIsTransitionOn(false);
      }, 500);
    } else if (!isTransitionOn) {
      setTimeout(() => {
        setIsTransitionOn(true);
      }, 10);
    }
  }, [imgIdx, isTransitionOn]);

  const handleNextBtn = () => {
    if (imgIdx === CAROUSEL_DATA.length + DUMMY_LENGTH) return;
    setImgIdx((prev) => prev + 1);
  };

  const handlePrevBtn = () => {
    if (imgIdx < DUMMY_LENGTH) return;
    setImgIdx((prev) => prev - 1);
  };

  const CAROUSEL_WITH_DUMMY = [...CAROUSEL_DATA];

  for (let i = 0; i < DUMMY_LENGTH; i++) {
    CAROUSEL_WITH_DUMMY.push(CAROUSEL_DATA[i]);
    CAROUSEL_WITH_DUMMY.unshift(CAROUSEL_DATA[CAROUSEL_DATA.length - 1 - i]);
  }

  return (
    <>
      <S.SlideWrapper
        onMouseEnter={() => clearInterval(carouselInterval)}
        onMouseLeave={() => {
          const interval = setInterval(handleNextBtn, 2000);
          setCarouselInterval(interval);
        }}
      >
        <S.Slide imgIdx={imgIdx} isTransitionOn={isTransitionOn}>
          {CAROUSEL_WITH_DUMMY.map((carousel, idx) => (
            <S.SlideImg
              key={idx}
              src={`/images/${carousel}.png`}
              alt={carousel}
              isCurrent={idx === imgIdx}
              isTransitionOn={isTransitionOn}
            />
          ))}
        </S.Slide>
        <S.LeftBtn
          src="/images/arrow_page_left_dim.png"
          onClick={handlePrevBtn}
        />
        <S.RightBtn
          src="/images/arrow_page_right_dim.png"
          onClick={handleNextBtn}
        />
        <S.GradientLeft />
        <S.GradientRight />
      </S.SlideWrapper>
      <S.IndicatorWrapper>
        {CAROUSEL_DATA.map((_, idx) => {
          let isCurrent = idx === imgIdx - DUMMY_LENGTH;

          if (
            (idx === 0 && imgIdx === CAROUSEL_DATA.length + DUMMY_LENGTH) ||
            (idx === CAROUSEL_DATA.length - 1 && imgIdx === DUMMY_LENGTH - 1)
          ) {
            isCurrent = true;
          }

          return (
            <S.Indicator
              key={idx}
              isCurrent={isCurrent}
              onClick={() => setImgIdx(idx + DUMMY_LENGTH)}
            />
          );
        })}
      </S.IndicatorWrapper>
    </>
  );
};

export default Carousel;
