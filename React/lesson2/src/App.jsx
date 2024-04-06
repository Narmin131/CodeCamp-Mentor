import { useEffect, useState } from "react";
import Example from "./components/Example";
import Loader from "./components/Loader";
import TopToScroll from "./components/TopToScroll";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
        <div className="App">
          <h1>salam</h1>
          <Example />
          <Example />
          <Example />
          <TopToScroll/>
        </div>
      {/* )} */}
    </>
  );
}

export default App;
