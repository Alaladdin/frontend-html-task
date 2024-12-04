import { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsUpDown,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import user from "../../assets/jimmy.png";
import PropTypes from "prop-types";
import {
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
} from "./styles";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const Sidebar = (props) => {
  const { color } = props;
  const [isOpened, setIsOpened] = useState(false);
  const containerClassnames = classnames({ opened: isOpened });

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Container isOpened={isOpened} className={containerClassnames}>
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
            key={route.title}
            onClick={() => {
              goToRoute(route.path);
            }}
            isOpened={isOpened}
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
            isOpened={isOpened}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span>{route.title}</span>
          </SupItem>
        ))}
      </Sup>
      <Prof>
        <ProfWrapper>
          <img src={user} alt="user logo" />
          <ProfInfo isOpened={isOpened}>
            <p>User Account</p>
            <h2>Boris G.</h2>
          </ProfInfo>
        </ProfWrapper>
        <InfoWrapper>
          <FontAwesomeIcon icon={faArrowsUpDown} />
        </InfoWrapper>
      </Prof>
    </Container>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
