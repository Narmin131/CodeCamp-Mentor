import { Select, Space } from "antd";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Salam");
  const myFunc = () => {
    if (counter <= 0) {
      alert("munkun deyil");
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={myFunc} disabled={counter == 0}>
        -
      </button>
      <button onClick={() => setCounter(0)}>reset</button>

      {/* <button onClick={myFunc}>jhfk</button> */}

      <h2>{name}</h2>
      <button onClick={() => setName("Sagoo")}>Change name</button>
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        // onChange={handleChange}
        options={[
          {
            value: "dafdk",
            label: "sjak",
          },
          {
            value: "lucy",
            label: "Lucy",
          },
          {
            value: "Yiminghe",
            label: "yiminghe",
          },
          {
            value: "disabled",
            label: "Disabled",
            disabled: true,
          },
        ]}
      />
      <h1>Salam</h1>
    </div>
  );
}

export default App;
