import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
const Sidebar = () => {
  const [extented, setExtented] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu-icon"
          onClick={() => setExtented((prev) => !prev)}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus-icon" />
          {extented ? <p>New Chat</p> : null}
        </div>

        {extented ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="message_icon" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question_icon" />
          {extented ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history_icon" />
          {extented ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting_icon" />
          {extented ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
