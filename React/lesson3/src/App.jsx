import { useEffect } from "react";
import { useState } from "react";
import { Select, Space } from "antd";
import Home from "./pages/Home";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setState(data.products);
      });
  }, []);

  const sortProducts = (params) => {
    if (params === "all") {
      window.location.reload();
    } else if (params === "low-to-high") {
      let copyState = [...state];
      let sortAllProducts = copyState.sort((a, b) => a.price - b.price);
      setState(sortAllProducts);
    } else if (params === "high-to-low") {
      let copyState = [...state];
      let sortAllProducts = copyState.sort((a, b) => b.price - a.price);
      setState(sortAllProducts);
    } else if (params === "a-z") {
      let copyState = [...state];
      let sortAllProducts = copyState.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setState(sortAllProducts);
    } else if (params === "z-a") {
      let copyState = [...state];
      let sortAllProducts = copyState.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setState(sortAllProducts);
    }
  };
  return (
    <>
      <Home />
      <div className="container">
        <div className="row">
          <Select
            defaultValue="All"
            style={{
              width: 120,
            }}
            onChange={sortProducts}
            options={[
              {
                value: "all",
                label: "All",
              },
              {
                value: "low-to-high",
                label: "Low-To-High",
              },
              {
                value: "high-to-low",
                label: "High-To-High",
              },
              {
                value: "a-z",
                label: "A-Z",
              },
              {
                value: "z-a",
                label: "Z-A",
              },
            ]}
          />
          {state.map((item) => {
            return (
              <div className="col-lg-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={item.thumbnail}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <span className="card-title">{item.price}$</span>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
