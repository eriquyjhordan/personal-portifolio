import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: #0f1221;
  padding: 3.2rem 0;
`;

export const FooterWrapper = styled.div`
  max-width: 121.6rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 2.4rem;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #f9f9fb;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FooterPresentation = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 38.5rem;
  margin-bottom: 8.4rem;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #f9f9fb;
`;

export const FooterLinks = styled.ul``;

export const FooterLink = styled.li`
  list-style: none;
`;

export const FooterLinkTitle = styled(Link)`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;

export const ButtonCalltoAction = styled(Link)``;

export const FooterRights = styled.div``;

export const CopyRights = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #f9f9fb;
`;

export const SocialLinks = styled.nav``;

export const SocialLink = styled(Link)``;

export const Icon = styled(Image)``;
