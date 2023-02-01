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
`;
export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
export const Icon = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const Circle = styled.div`
  position: absolute;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0%;
  width: 300%;
  height: 300%;
  margin-left: -100%;
  border-radius: 100%;
  background-color: #edf2ff;
  z-index: -1;
`;
