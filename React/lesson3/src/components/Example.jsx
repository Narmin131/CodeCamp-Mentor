import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Example = () => {
  const [state, setState] = useState();

  //   useEffect(() => {
  //     axios("https://dummyjson.com/products").then((res) => {
  //       console.log(res.data.products);
  //       setState(res.data.products);
  //     });
  //   }, []);

  //   useEffect(() => {});

  //   useEffect(() => {}, []);

  //   useEffect(() => {}, [state]);

  return (
    <>
      <div
        style={{ width: "100%", height: "50vh", backgroundColor: "red", margin:"20px"}}
      ></div>
    </>
  );
};

export default Example;
