import styled from "styled-components";
import PropTypes from "prop-types";
import logo from "../../assets/logo.png";

const LogoSectionStyled = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 32px;
    margin-right: 12px;
  }
  span {
    color: ${({ theme }) => theme.logoText};
    font-weight: bold;
    font-size: 1.2rem;
    opacity: ${({ $collapsed }) => ($collapsed ? "0" : "1")};
    transition: opacity 0.3s;
  }
`;

const LogoSection = ({ theme, $collapsed }) => (
  <LogoSectionStyled theme={theme} $collapsed={$collapsed}>
    <img src={logo} alt="TensorFlow logo" />
    <span>TensorFlow</span>
  </LogoSectionStyled>
);

LogoSection.propTypes = {
  theme: PropTypes.object.isRequired,
  $collapsed: PropTypes.bool.isRequired,
};

export default LogoSection;