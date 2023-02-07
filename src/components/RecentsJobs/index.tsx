import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Container, ImagesCarousel } from './styles';


export default function RecentsJobs() {
  return (
    <>
      <Container>
        <ImagesCarousel>
          <div>
            <img alt="" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/cdacbb75864625.5cc1c2e8e9ef9.png" />
          </div>
          <div>
            <img alt="" src="https://cdn.dribbble.com/users/427857/screenshots/13788366/showcase_3_4x.png" />
          </div>
          <div>
            <img alt="" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b9663376037803.5c606dbc2e8dd.png" />
          </div>
        </ImagesCarousel>
      </Container>
    </>
  );
}