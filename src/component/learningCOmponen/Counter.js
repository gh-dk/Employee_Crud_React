import React, { useEffect, useRef, useState } from "react";

function Counter() {
  let varCounter = 0;
  const [stateCount, setstateCount] = useState(0);
  const refCounter = useRef(0);

  useEffect(() => {
    console.log(varCounter, "var");
    console.log(stateCount, "ste");
    console.log(refCounter, "ref");
  });
  return (
    <div>
      <h1>
        var : {varCounter}{" "}
        <button
          onClick={() => {
            varCounter = varCounter + 1;
          }}
          className="btn btn-primary mr-5"
        >
          increment
        </button>
      </h1>
      <h1>
        Ste : {stateCount}{" "}
        <button
          onClick={() => {
            setstateCount((prev) => prev + 1);
          }}
          className="btn btn-primary mr-5"
        >
          increment
        </button>
      </h1>
      <h1>
        Ref : {refCounter.current}{" "}
        <button
          onClick={() => {
            refCounter.current = refCounter.current + 1;
          }}
          className="btn btn-primary mr-5"
        >
          increment
        </button>
      </h1>
    </div>
  );
}

export default Counter;
