import { assets } from "../../assets/assets";
import "./main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user_icon" />
      </div>
    </div>
  );
};

export default Main;
