import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { BOTTOM_ROUTES, TOP_ROUTES } from "../../constants/sidebarRoutes";
import { useTheme } from "../../theme/ThemeContext";
import { darkTheme, lightTheme } from "../../theme/theme";
import CollapseButton from "./CollapseButton";
import LogoSection from "./LogoSection";
import NavItem from "./NavItem";

const Sidebar = ({ color }) => {
  const { theme } = useTheme();
  const currentPath = window.location.pathname; // location.pathname from "react-router-dom";
  const [isCollapsed, setIsCollapsed] = useState(false);
  const localTheme = useMemo(() => {
    if (color === "light") return lightTheme;
    if (color === "dark") return darkTheme;
    return theme;
  }, [color, theme]);

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  return (
    <SidebarContainer theme={localTheme} $collapsed={isCollapsed}>
      <CollapseButton
        $collapsed={isCollapsed}
        theme={localTheme}
        onClick={() => setIsCollapsed((prev) => !prev)}
      />
      <LogoSection theme={localTheme} $collapsed={isCollapsed} />
      <RouteSection>
        {TOP_ROUTES?.map((route) => (
          <NavItem
            key={route.title}
            title={route.title}
            icon={route.icon}
            path={route.path}
            onClick={() => goToRoute(route.path)}
            theme={localTheme}
            isActive={currentPath === route.path}
            collapsed={isCollapsed}
          />
        ))}
      </RouteSection>
      <RouteSection>
        {BOTTOM_ROUTES.map((route) => (
          <NavItem
            key={route.title}
            title={route.title}
            icon={route.icon}
            path={route.path}
            onClick={() => goToRoute(route.path)}
            theme={localTheme}
            collapsed={isCollapsed}
          />
        ))}
      </RouteSection>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};
const SidebarContainer = styled.div`
  width: ${({ $collapsed }) => ($collapsed ? "38px" : "260px")};
  background: ${({ theme }) => theme.sidebarBackground};
  color: ${({ theme }) => theme.textDefault};
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: width 0.3s ease, background 0.3s, color 0.3s;
  ${"" /* overflow: hidden; */}
  position: relative;
`;

const RouteSection = styled.div`
  margin-top: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default Sidebar;
