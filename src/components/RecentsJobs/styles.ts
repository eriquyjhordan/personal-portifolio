import styled from "styled-components";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  @media (min-width: 790px) {
    width: 100%;
  }
`;

export const ImagesCarousel = styled(Carousel).attrs({
  centerMode: true,
  showArrows: true,
  showStatus: false,
  infiniteLoop: true,
  showThumbs: false,
  swipeable: true,
  emulateTouch: true,
  interval: 3500,
  autoPlay: true,
  transitionTime: 2000,
  selectedItem: 0,
})`
  cursor: move;
  user-select: none;
`;
