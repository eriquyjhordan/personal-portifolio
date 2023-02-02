import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  height: 100vh;
`;

export const Wrapper = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  justify-content: center;
  padding: 0 24px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
`;
export const Nav = styled(Link)`
  color: #0f1221;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #0f1221;
    opacity: 0.8;
    border-bottom: 1px solid #0f1221;
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
export const Icon = styled(Image)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Hero = styled.section`
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
`;
export const HeroLeft = styled.div``;
export const Title = styled.h1`
  max-width: 420px;
  font-weight: 700;
  color: #0f1221;
  line-height: 56px;
  font-size: 46px;
`;
export const SubTitle = styled.h2`
  font-weight: 700;
  color: #5e3aee;
  line-height: 47px;
  font-size: 38px;
`;
export const Description = styled.h3`
  font-weight: 400;
  max-width: 450px;
  margin-top: 24px;
  color: #0f1221;
  margin-bottom: 36px;
`;
export const ButtonCalltoAction = styled(Link)`
  background-color: #4263eb;
  color: #f9f9fb;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  box-shadow: 0px 4px 4px rgba(15, 18, 33, 0.3);
  border-radius: 8px;
  width: 300px;
  height: 56px;
  padding: 16px 60px;
  text-decoration: none;
  text-align: center;
`;
export const ButtonDisclaimer = styled.p`
  margin-top: 8px;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #868e96;
  max-width: 300px;
  text-align: center;
`;
export const HeroRight = styled.div``;
export const ImageHero = styled(Image)``;
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
