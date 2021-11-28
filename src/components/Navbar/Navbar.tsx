import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Navbar.scss";

export type NavbarProps = {};

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const BARS_ICON = "fa-bars";
  const PENCIL_ICON = "fa-pencil-alt";
  const APP_NAME = "Tavisca";
  const FLIGHTS_PAGE_TITLE = "Flights";
  const BACK_ICON = "fa-arrow-left";

  const [leftIcon, setLeftIcon] = useState(BARS_ICON);
  const [rightIcon, setRightIcon] = useState(PENCIL_ICON);
  const [title, setTitle] = useState(APP_NAME);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setLeftIcon(BARS_ICON);
        setRightIcon("");
        setTitle(APP_NAME);
        break;
      case "/flights":
        setLeftIcon(BACK_ICON);
        setRightIcon(PENCIL_ICON);
        setTitle(FLIGHTS_PAGE_TITLE);
    }
  }, [location]);

  const goBack = () => {
    navigate(-1);
  };

  const getLeftIcon = () => {
    switch (location.pathname) {
      case "/":
        return <i className="hover-pointer fas fa-bars"></i>;
      case "/flights":
        return (
          <i className="hover-pointer fas fa-arrow-left" onClick={goBack}></i>
        );
    }
  };

  return (
    <div className="row py-2 px-3 m-0 nav-bar">
      {getLeftIcon()}
      <span className="col text-align-center">{title}</span>
      <i className={"hover-pointer fas " + rightIcon}></i>
    </div>
  );
};
