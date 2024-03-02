import React, { useState } from "react";
import styled from "styled-components";
import { pageState, resultState } from "../common/recoil";
import { useRecoilState, useSetRecoilState } from "recoil";
import QuestionJson from "../common/api/Question.json";

const SelectPage: React.FC = () => {
  const setPage = useSetRecoilState(pageState);
  const [result, setResult] = useRecoilState(resultState);
  const [num, setNum] = useState(0);
  const MARGIN_BOTTOM = QuestionJson[num].question.split("\n").length - 1;

  const nextSlide = (type: string) => {
    setResult([...result, type]);

    if (num === 5) {
      setPage(2);
    } else {
      setNum(num + 1);
    }
  };

  return (
    <Container>
      <div>
        <Question $marginbottom={MARGIN_BOTTOM} $fontsize={num === 3}>
          {QuestionJson[num].question}
        </Question>
        <Answer1 onClick={() => nextSlide(QuestionJson[num].answers[0].type)}>
          {QuestionJson[num].answers[0].answer}
        </Answer1>
        <Answer2 onClick={() => nextSlide(QuestionJson[num].answers[1].type)}>
          {QuestionJson[num].answers[1].answer}
        </Answer2>
      </div>
    </Container>
  );
};

export default SelectPage;

const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  white-space: pre-line;

  > div {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 750px) {
      transform: scale(1.5);
    }
  }
`;

const Question = styled.div<{ $marginbottom: number; $fontsize: boolean }>`
  margin-bottom: ${(props) => (props.$marginbottom === 1 ? 81 : 71)}px;

  font-family: GmarketSansMedium;
  font-size: ${(props) => (props.$fontsize ? 15 : 18)}px;
  font-weight: 400;
  line-height: 25px;
  color: #000000;
`;

const Answer1 = styled.button`
  width: 342px;
  height: 102px;
  background-color: #fff6a9;
  border: 1px solid #402a19;
  margin-bottom: 19px;
  padding-top: 5px;

  font-family: GmarketSansMedium;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: #000000;
  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const Answer2 = styled.button`
  width: 342px;
  height: 102px;
  background-color: #ffcfd6;
  border: 1px solid #402a19;
  padding-top: 5px;

  font-family: GmarketSansMedium;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: #000000;
  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;
