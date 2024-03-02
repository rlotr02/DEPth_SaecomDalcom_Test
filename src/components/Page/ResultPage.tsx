import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageState, resultState } from "../common/recoil";
import ResultJson from "../common/api/Result.json";
import { RESULT_IMAGES } from "../common/image";
import ShareImgBtn from "../common/ShareImgBtn";
import LoadingPage from "./LoadingPage";

const ResultPage: React.FC = () => {
  const [result, setResult] = useRecoilState(resultState);
  const setPage = useSetRecoilState(pageState);
  const [type, setType] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    findResult(result);

    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, [result]);

  const findResult = (result: string[]) => {
    const count: { [key: string]: number } = result.reduce(
      (acc: { [key: string]: number }, char: string) => {
        return { ...acc, [char]: (acc[char] || 0) + 1 };
      },
      {}
    );

    const RESULT_TYPE = Object.entries(count)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 2)
      .map((entry) => entry[0])
      .sort()
      .join("");

    if (RESULT_TYPE === "AC") {
      setType(0);
    } else if (RESULT_TYPE === "BC") {
      setType(1);
    } else if (RESULT_TYPE === "AD") {
      setType(2);
    } else if (RESULT_TYPE === "BD") {
      setType(3);
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Container>
          {type !== null && (
            <div>
              <ResultWrap id="saveImg">
                <h2>{ResultJson[type].taste}맛 새콤달콤</h2>
                <img src={RESULT_IMAGES[type]} alt={ResultJson[type].taste} />
                <DesWrap>{ResultJson[type].description}</DesWrap>
              </ResultWrap>
              <ShareImgBtn />
              <RestartBtn
                onClick={() => {
                  setResult([]);
                  setPage(0);
                }}
              >
                다시 해보기
              </RestartBtn>
            </div>
          )}
        </Container>
      )}
    </>
  );
};

export default ResultPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  white-space: pre-line;

  > div {
    margin-top: 30px;
    width: 342px;

    @media screen and (min-width: 750px) {
      margin-top: 54px;
      zoom: 1.5;
    }
  }
`;

const ResultWrap = styled.div`
  background-color: #ffcfd6;
  padding: 10.92px 8px;
  border-radius: 2px;
  margin-bottom: 18.14px;

  > h2 {
    background-color: #fff6a9;
    border: 1px solid #0e0905;
    padding: 13px 0;
    margin-bottom: 5px;

    font-family: GmarketSansMedium;
    font-size: 18px;
    font-weight: 400;
    color: #402a19;
  }

  > img {
    width: 326px;
  }
`;

const DesWrap = styled.div`
  background-color: #fff6a9;
  border: 1px solid #0e0905;
  border-radius: 2px;
  padding: 17.5px 12px;

  font-family: GmarketSansMedium;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: #000000;
  text-align: left;
`;

const RestartBtn = styled.button`
  width: 100%;
  background-color: #fff6a9;
  border: 1px solid #402a19;
  padding: 7.5px 0;
  margin-bottom: 32px;

  font-family: GmarketSansMedium;
  font-size: 20px;
  font-weight: 400;
  color: #000000;

  @media screen and (min-width: 750px) {
    margin-bottom: 50px;
  }
`;
