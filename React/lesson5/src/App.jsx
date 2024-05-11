import { useDispatch, useSelector } from "react-redux";
import About from "./pages/About";
import { incremnetFunct, reset, decrementFunct } from "./redux/action/index";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate()
  // if(){
  //   navigate('/')
  // }
  const counter = useSelector((state) => state.appReducer);

  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  const { t } = useTranslation();

  return (
    <>
      <li>{t("header.0")}</li>
      <li>{t("header.1")}</li>
      <h1>Redux</h1>
      <span>{counter}</span>
      <button onClick={() => dispatch(incremnetFunct())}>+</button>
      <button onClick={() => dispatch(decrementFunct())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>

      <button onClick={() => changeLanguage("az")}>az</button>
      <button onClick={() => changeLanguage("en")}>en</button>
      <About />
    </>
  );
}

export default App;
