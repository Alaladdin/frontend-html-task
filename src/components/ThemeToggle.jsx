import styled from "styled-components";
import { useTheme } from "../theme/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  top: 20px;
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.textDefault};
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: ${({ theme }) => theme.buttonBackgroundActive};
    color: ${({ theme }) => theme.textHover};
  }
`;

const ThemeToggle = () => {
  const { themeName, toggleTheme, theme } = useTheme();
  return (
    <ToggleButton theme={theme} onClick={toggleTheme}>
      <FontAwesomeIcon icon={themeName === "light" ? faMoon : faSun} />
    </ToggleButton>
  );
};

export default ThemeToggle;
