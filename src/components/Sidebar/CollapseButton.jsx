import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CollapseButtonStyled = styled.button`
  position: absolute;
  right: ${({ $collapsed }) => ($collapsed ? "-48px" : "-18px")};
  top: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.textDefault};
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: right 0.3s ease, background 0.3s, color 0.3s;
  z-index: 2;
  &:hover {
    background: ${({ theme }) => theme.buttonBackgroundActive};
    color: ${({ theme }) => theme.textHover};
  }
`;

const CollapseButton = ({ $collapsed, theme, onClick }) => (
  <CollapseButtonStyled
    $collapsed={$collapsed}
    theme={theme}
    onClick={onClick}
    aria-label={$collapsed ? "Expand sidebar" : "Collapse sidebar"}
  >
    {$collapsed ? (
      <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
    ) : (
      <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
    )}
  </CollapseButtonStyled>
);

CollapseButton.propTypes = {
  $collapsed: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CollapseButton;