import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({
  title,
  icon,
  path,
  onClick,
  collapsed,
  isActive = false,
  theme,
}) => (
  <RouteItem
    onClick={() => onClick(path)}
    theme={theme}
    $isActive={isActive}
    $collapsed={collapsed}
  >
    <FontAwesomeIcon icon={icon} />
    <span title={collapsed ? title : undefined}>{title}</span>
  </RouteItem>
);

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  collapsed: PropTypes.bool,
  isActive: PropTypes.bool,
  theme: PropTypes.object,
};
const RouteItem = styled.div`
  min-width: 18px;
  display: flex;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  padding: 8px 12px;
  border-radius: 14px;
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.sidebarBackgroundActive : "transparent"};
  cursor: pointer;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.textActive : theme.textDefault};
  transition: background 0.3s, color 0.3s;
  font-weight: bold;
  &:hover {
    background: ${({ theme }) => theme.sidebarBackgroundHover};
    color: ${({ theme }) => theme.textHover};

    svg {
      color: ${({ theme }) => theme.textHover};
    }
    span {
      color: ${({ theme }) => theme.textHover};
    }
  }
  svg {
    margin-right: 20px;
    color: ${({ $isActive, theme }) =>
      $isActive ? theme.textActive : theme.textDefault};
    transition: color 0.3s;
  }
  span {
    opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
    transition: opacity 0.2s, color 0.3s;
    color: ${({ $isActive, theme }) =>
      $isActive ? theme.textActive : theme.textDefault};
  }
`;

export default NavItem;
