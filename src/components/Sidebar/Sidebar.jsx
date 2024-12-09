import { useEffect, useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faAngleDown,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import user from "../../assets/jimmy.png";
import PropTypes from "prop-types";
import {
  Wrapper,
  Container,
  Logo,
  LogoWrapper,
  IconWrapper,
  Nav,
  Sup,
  NavItem,
  SupItem,
  Prof,
  ProfWrapper,
  ProfInfo,
  InfoWrapper,
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
  const { color } = props;
  const [isOpened, setIsOpened] = useState(true);
  const [isActive, setIsActive] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

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
        <Logo>
          <LogoWrapper isOpened={isOpened}>
            <img src={logo} alt="TensorFlow logo" />
            <span>TensorFlow</span>
          </LogoWrapper>
          <IconWrapper onClick={toggleSidebar} isOpened={isOpened}>
            <FontAwesomeIcon icon={isOpened ? faAngleLeft : faAngleRight} />
          </IconWrapper>
        </Logo>
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
          <ProfWrapper isOpened={isOpened}>
            <img src={user} alt="user logo" />
            <ProfInfo isOpened={isOpened}>
              <p>User Account</p>
              <h2>Boris G.</h2>
            </ProfInfo>
          </ProfWrapper>
          <InfoWrapper onClick={toggleProfile} isOpened={isOpened}>
            <FontAwesomeIcon icon={showProfile ? faAngleDown : faAngleUp} />
          </InfoWrapper>
        </Prof>
      </Container>{" "}
      <InfoBlock color={color} showProfile={showProfile}>
        <ProfWrapper isOpened={isOpened}>
          <img src={user} alt="user logo" />
          <BlockInfo>
            <h2>Boris Gromov</h2>
            <p>cv@gromovboris.com</p>
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
            V10.30 - <span>Terms and Conditions</span>
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
