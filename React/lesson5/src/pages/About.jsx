import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import WishBtn from "../components/WishBtn";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {data?.map((item) => {
              return (
                <div className="col-lg-3">
                  <div className="card" style={{ width: "100%" }}>
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}C</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <WishBtn myProduct={item} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
