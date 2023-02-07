import Image from "next/image";
import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 790px) {
    flex-direction: column-reverse;
    margin-top: 5.4rem;
  }
`;

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
  text-align: center;
  @media (max-width: 450px) {
    max-width: 30rem;
  }
`;

export const MainTecnologiesList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  width: 73.492rem;
  @media (max-width: 790px) {
    width: 90vw;
  }
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

export const MainCenterImage = styled(Image).attrs({
  placeholder: "blur",
})`
  filter: drop-shadow(0px 4px 4px rgba(15, 18, 33, 0.15));
  max-width: 80vw;
  @media (max-width: 790px) {
    max-width: 70vw;
  }
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
