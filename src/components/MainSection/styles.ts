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
