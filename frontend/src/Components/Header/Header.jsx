import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MainLogo from "../../Asset/MainLogo.png";
import { useGlobalState } from "../../GlobalContextProvider";
const Header = () => {
  const [{ user }, dispatch] = useGlobalState();
   const Navigate = useNavigate();
  const leadtoLogin = () => {
    Navigate("/login");
  };
 
  return (
    <div className="Header__wrapper">
      <img className="Header__Main-logo" src={MainLogo} alt="Main logo" />

      <div className="Header__Links-wrapper">
        <div>
          <p>History</p>
        </div>
        <div>
          <p>Today</p>
        </div>
      </div>

      {user ? (
        <img
          className="Header__profile-icon"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="your profile pic"
        />
      ) : (
        <div onClick={leadtoLogin}>Login</div>
      )}
    </div>
  );
};

export default Header;
