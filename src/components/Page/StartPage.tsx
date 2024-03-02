import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { pageState } from "../common/recoil";
import { RESULT_IMAGES } from "../common/image";
import { ReactComponent as DEPth } from "../common/image/DEPth.svg";

const StartPage: React.FC = () => {
  const setPage = useSetRecoilState(pageState);

  return (
    <Container>
      <div>
        <HeroSection>
          <h1>새콤달콤 유형 테스트</h1>
          <img src={RESULT_IMAGES[0]} alt="딸기" />
          <img src={RESULT_IMAGES[1]} alt="레모네이드" />
          <img src={RESULT_IMAGES[2]} alt="포도" />
          <img src={RESULT_IMAGES[3]} alt="복숭아" />
          <DEPth />
        </HeroSection>
        <StartBtn onClick={() => setPage(1)}>테스트 시작하기</StartBtn>
      </div>
    </Container>
  );
};

export default StartPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;

  > div {
    width: 342px;

    @media screen and (min-width: 750px) {
      transform: scale(1.5);
    }
  }
`;

const HeroSection = styled.div`
  background-color: #ffcfd6;
  padding: 8.82px 7.9px;
  margin-bottom: 16.11px;

  > h1 {
    background-color: #fff6a9;
    border: 1px solid #402a19;
    padding: 8.98px 0;
    margin-bottom: 7.67px;
    border-radius: 2px;

    font-family: GmarketSansMedium;
    font-size: 31px;
    font-weight: 400;
  }

  > img {
    width: 326px;
  }

  > svg {
    display: block;
    margin-left: auto;
  }
`;

const StartBtn = styled.button`
  background-color: #fff6a9;
  width: 100%;
  border: 1px solid #402a19;

  font-family: GmarketSansMedium;
  font-size: 20px;
  font-weight: 400;
  padding: 7.5px 0;
  color: #000;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
