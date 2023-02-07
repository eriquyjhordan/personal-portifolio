import styled from "styled-components";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Container = styled.div`
  width: 90%;
  margin: 12.8rem auto;

  @media (min-width: 790px) {
    width: 100%;
  }
`;

export const ImagesCarousel = styled(Carousel).attrs({
  centerMode: true,
  infiniteLoop: true,
  showArrows: true,
  showStatus: false,
  showThumbs: false,
  emulateTouch: true,
  interval: 3500,
  autoPlay: true,
  transitionTime: 2000,
  centerSlidePercentage: 85,
  AnimationTimeline: true,
  swipeScrollTolerance: 10,
  preventMovementUntilSwipeScrollTolerance: true,
})`
  cursor: move;
  user-select: none;
`;
