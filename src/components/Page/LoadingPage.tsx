import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RESULT_IMAGES } from "../common/image";

const LoadingPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((currentImageIndex + 1) % RESULT_IMAGES.length);
    }, 200);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <Container>
      <div>
        <img
          src={RESULT_IMAGES[currentImageIndex]}
          alt={`result ${currentImageIndex}`}
        />
      </div>
    </Container>
  );
};

export default LoadingPage;

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
  cursor: wait;

  > div {
    @media screen and (min-width: 750px) {
      transform: scale(1.5);
    }
  }

  > div > img {
    width: 180px;
  }
`;
