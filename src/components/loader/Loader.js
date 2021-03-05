import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loader = () => {
  const { promiseInProgress } = usePromiseTracker();
  const css = "margin: 0; position: absolute; top: 50%; right: 50%; transform: translate(50%,-50%);";

  return (
    <div>
      {
        <PacmanLoader color={"#ffe000"} loading={promiseInProgress} css={css} size={50} />
      }
    </div>
  )
};

export default Loader;