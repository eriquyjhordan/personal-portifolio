import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  max-width: 121.6rem;
  margin: 0 auto;
  justify-content: center;
  padding: 0 2.4rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.4rem;
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  position: relative;
`;
export const Nav = styled(Link)`
  color: #0f1221;
  font-size: 1.8rem;
  line-height: 2.2rem;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #0f1221;
    opacity: 0.8;
    border-bottom: 0.1rem solid #0f1221;
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;
export const Icon = styled(Image)`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Hero = styled.section`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
export const HeroLeft = styled.div``;
export const Title = styled.h1`
  max-width: 42rem;
  font-weight: 700;
  color: #0f1221;
  line-height: 5.6rem;
  font-size: 4.6rem;
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
`;
export const ButtonCalltoAction = styled(Link)`
  background-color: #4263eb;
  color: #f9f9fb;
  font-weight: 600;
  font-size: 18px;
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
