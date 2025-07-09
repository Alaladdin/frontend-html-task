import { useMemo } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import { useTheme } from "../../theme/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/theme";

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

const SidebarContainer = styled.div`
  width: 260px;
  background: ${({ theme }) => theme.sidebarBackground};
  color: ${({ theme }) => theme.textDefault};
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: background 0.3s, color 0.3s;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 16px 16px 16px;
  img {
    width: 32px;
    margin-right: 12px;
  }
  span {
    color: ${({ theme }) => theme.logoText};
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const RouteSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RouteItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.textDefault};
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: ${({ theme }) => theme.sidebarBackgroundHover};
    color: ${({ theme }) => theme.textHover};
  }
`;

const Sidebar = ({ color }) => {
  const { theme } = useTheme();
  const localTheme = useMemo(() => {
    if (color === "light") return lightTheme;
    if (color === "dark") return darkTheme;
    return theme;
  }, [color, theme]);

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  return (
    <SidebarContainer theme={localTheme}>
      <LogoSection theme={localTheme}>
        <img src={logo} alt="TensorFlow logo" />
        <span>TensorFlow</span>
      </LogoSection>
      <RouteSection>
        {routes.map((route) => (
          <RouteItem
            key={route.title}
            theme={localTheme}
            onClick={() => goToRoute(route.path)}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span style={{ marginLeft: 12 }}>{route.title}</span>
          </RouteItem>
        ))}
      </RouteSection>
      <RouteSection>
        {bottomRoutes.map((route) => (
          <RouteItem
            key={route.title}
            theme={localTheme}
            onClick={() => goToRoute(route.path)}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span style={{ marginLeft: 12 }}>{route.title}</span>
          </RouteItem>
        ))}
      </RouteSection>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
