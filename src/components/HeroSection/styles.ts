import styled from "styled-components";

import Link from "next/link";
import Image from "next/image";

export const Hero = styled.section`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media (max-width: 790px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 0;
  }
`;
export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 790px) {
    align-items: center;
    margin-top: 4rem;
  }
`;
export const Title = styled.h1`
  max-width: 42rem;
  font-weight: 700;
  color: #0f1221;
  line-height: 5.6rem;
  font-size: 4.6rem;
  @media (max-width: 790px) {
    font-size: 3.6rem;
    line-height: 4.6rem;
    text-align: center;
    max-width: 28.4rem;
  }
`;
export const SubTitle = styled.h2`
  font-weight: 700;
  color: #5e3aee;
  line-height: 4.7rem;
  font-size: 3.8rem;
`;
export const Description = styled.h3`
  font-weight: 400;
  max-width: 45rem;
  margin: 2.4rem 0;
  color: #0f1221;
  font-size: 1.8rem;
  & strong {
    font-weight: 700;
    font-size: 1.8rem;
  }
  @media (max-width: 790px) {
    text-align: center;
  }
`;
export const ButtonCalltoAction = styled(Link)`
  background-color: #4263eb;
  color: #f9f9fb;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 150%;
  box-shadow: 0rem 0.4rem 0.4rem rgba(15, 18, 33, 0.3);
  border-radius: 0.8rem;
  width: 30rem;
  height: 5rem;
  padding: 0.8rem 6rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.85;
  }
`;
export const ButtonDisclaimer = styled.p`
  margin-top: 0.8rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #868e96;
  max-width: 30rem;
  text-align: center;
`;
export const HeroRight = styled.div``;
export const ImageHero = styled(Image)`
  width: 100%;
  object-fit: contain;
  @media (max-width: 790px) {
    width: 100%;
    height: 100%;
    max-width: 48rem;
  }
`;
export const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
`;
export const SubTitleIllustration = styled(Image)``;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
