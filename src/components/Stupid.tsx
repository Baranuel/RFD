"use client";

import React, { useState } from "react";

function Stupid() {
  const [data, setData] = useState<any>(null);

  const getData = async () => {
    const response = await fetch("api/hello");
    const data = await response.json();
    setData(data);
  };
  return (
    <>
      <button onClick={() => getData()}>Stupid</button>
      <br />
      <br />
      <br />
      {data && <p>{data?.message}</p>}
    </>
  );
}

export default Stupid;
