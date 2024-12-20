import React from "react";
import { useEffect, useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faAngleDown,
  faSignOutAlt,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo_new.png";
import user from "../../assets/jimmy.png";
import PropTypes from "prop-types";
import {
  Wrapper,
  Container,
  Header,
  Logo,
  ArrowsLeftRight,
  Theme,
  ArrowsUpDown,
  Nav,
  Sup,
  NavItem,
  SupItem,
  Prof,
  ProfWrapper,
  ProfInfo,
  InfoBlock,
  ProfItem,
  BlockInfo,
  ProfBottom,
  Logout,
  LogoutItem,
  ProfBar,
} from "./styles";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const profRoutes = [
  { title: "Profile", path: "/profile" },
  { title: "Manage", path: "/manage" },
  { title: "History", path: "/history" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const Sidebar = (props) => {
  const [isOpened, setIsOpened] = useState(true);
  const [isActive, setIsActive] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const { color, toggleTheme } = props;

  const containerClassnames = classnames({
    shows: showProfile,
    opened: isOpened,
  });

  const goToRoute = (path) => {
    setIsActive((prev) => (prev === path ? null : path));
  };

  const toggleSidebar = () => {
    setIsOpened(!isOpened);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".active")) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <Wrapper color={color}>
      <Container
        color={color}
        isOpened={isOpened}
        className={containerClassnames}
      >
        <Header>
          <Logo isOpened={isOpened}>
            <img src={logo} alt="TensorFlow logo" />
            <span>Insurance Broker</span>
          </Logo>
        </Header>
        <Nav>
          {routes.map((route) => (
            <NavItem
              className={isActive === route.path ? "active" : ""}
              key={route.title}
              onClick={() => {
                handleClick();
                goToRoute(route.path);
              }}
              isOpened={isOpened}
              color={color}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </NavItem>
          ))}
        </Nav>
        <Sup>
          {bottomRoutes.map((route) => (
            <SupItem
              key={route.title}
              onClick={() => {
                goToRoute(route.path);
              }}
              color={color}
              isOpened={isOpened}
              className={isActive === route.path ? "active" : ""}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </SupItem>
          ))}
        </Sup>
        <Prof isOpened={isOpened} color={color} showProfile={showProfile}>
          <ProfWrapper isOpened={isOpened} showProfile={showProfile}>
            <img src={user} alt="user logo" />
            <ProfInfo isOpened={isOpened} showProfile={showProfile}>
              <p>Agent`s Account</p>
              <h2>Boris G.</h2>
            </ProfInfo>
          </ProfWrapper>
        </Prof>
      </Container>{" "}
      <ArrowsLeftRight
        color={color}
        onClick={toggleSidebar}
        isOpened={isOpened}
      >
        <FontAwesomeIcon icon={isOpened ? faAngleLeft : faAngleRight} />
      </ArrowsLeftRight>
      <Theme color={color} onClick={toggleTheme}>
        <FontAwesomeIcon icon={color === "light" ? faMoon : faSun} />
      </Theme>
      <ArrowsUpDown color={color} onClick={toggleProfile} isOpened={isOpened}>
        <FontAwesomeIcon icon={showProfile ? faAngleDown : faAngleUp} />
      </ArrowsUpDown>
      <InfoBlock color={color} showProfile={showProfile}>
        <ProfWrapper isOpened={isOpened}>
          <img src={user} alt="user logo" />
          <BlockInfo isOpened={isOpened}>
            <h2>Boris Gromov</h2>
            <p>res@gromovboris.com</p>
          </BlockInfo>
        </ProfWrapper>{" "}
        <ProfBar>
          {profRoutes.map((route) => (
            <ProfItem
              key={route.title}
              onClick={() => {
                goToRoute(route.path);
              }}
              color={color}
              isOpened={isOpened}
              className={isActive === route.path ? "active" : ""}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </ProfItem>
          ))}
        </ProfBar>
        <ProfBottom>
          <Logout>
            <LogoutItem>Logout</LogoutItem>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Logout>
          <p>
            v1.2 - <span>Terms and Conditions</span>
          </p>
        </ProfBottom>
      </InfoBlock>
    </Wrapper>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
