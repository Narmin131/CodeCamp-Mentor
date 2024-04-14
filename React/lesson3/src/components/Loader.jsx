import React from "react";
import { DotLoader } from "react-spinners";

const Loader = () => {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>waiting</h1>
      <DotLoader color="#36d7b7" />
    </section>
  );
};

export default Loader;
