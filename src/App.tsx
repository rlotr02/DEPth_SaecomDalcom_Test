import React from "react";
import { useRecoilValue } from "recoil";
import { pageState } from "./components/common/recoil";
import StartPage from "./components/Page/StartPage";
import SelectPage from "./components/Page/SelectPage";
import ResultPage from "./components/Page/ResultPage";

const App: React.FC = () => {
  const page = useRecoilValue(pageState);

  return (
    <>
      {page === 0 && <StartPage />}
      {page === 1 && <SelectPage />}
      {page === 2 && <ResultPage />}
    </>
  );
};

export default App;
