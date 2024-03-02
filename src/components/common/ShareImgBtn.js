import React from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";

const ShareImgBtn = () => {
  const onCapture = () => {
    html2canvas(document.getElementById("saveImg"), {
      backgroundColor: "#ffcfd6",
    }).then((canvas) => {
      onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
    });
  };

  const onSaveAs = (url, filename) => {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = url;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  return <ShareBtn onClick={onCapture}>이미지로 저장</ShareBtn>;
};
export default ShareImgBtn;

const ShareBtn = styled.button`
  width: 100%;
  background-color: #fff6a9;
  border: 1px solid #402a19;
  padding: 7.5px 0;
  margin-bottom: 15px;

  font-family: GmarketSansMedium;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
`;
