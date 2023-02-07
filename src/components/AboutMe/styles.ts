import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-block: 12.8rem;
  @media (max-width: 1024px) {
    margin-top: 6.4rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const MyPhoto = styled(Image)`
  width: 45%;
  object-fit: contain;
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 490px) {
    width: 90%;
  }
`;
export const AboutMeContent = styled.div`
  max-width: 55.9rem;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #0f1221;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const TitleAboveImage = styled.h2`
  display: none;
  @media (max-width: 1024px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #0f1221;
    display: block;
    text-align: center;
  }
`;

export const DescriptionContainer = styled.div``;
export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #495057;
  margin-top: 4rem;
  @media (max-width: 1024px) {
    margin-top: 1.6rem;
    text-align: center;
  }
`;
