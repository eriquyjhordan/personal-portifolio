import Image from "next/image";
import styled from "styled-components";

export const MainContainer = styled.main``;

export const MainTecnologies = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.4rem;
`;

export const MainTecnologiesText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #495057;
`;

export const MainTecnologiesList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  max-width: 73.492rem;
  gap: 12.8rem;
`;

export const MainTecnologiesItem = styled.li`
  list-style: none;
`;

export const MainTecnologiesItemImage = styled(Image)``;

export const MainCenterTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.8rem;
`;

export const MainCenterImage = styled(Image)`
  width: 45rem;
  height: 35rem;
  filter: drop-shadow(0px 4px 4px rgba(15, 18, 33, 0.15));
`;

export const MainCenterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3.2rem;
`;

export const MainCenterTextTitle = styled.h2`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 3.9rem;
  color: #212529;
  text-align: center;
`;

export const MainCenterTextDescription = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 150%;
  text-align: center;
  color: #495057;
  margin-top: 2.4rem;
  max-width: 62.8rem;
`;

