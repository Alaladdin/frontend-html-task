import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';

const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpened ? '250px' : '70px')};
  background-color: ${(props) =>
    props.theme === 'dark' ? props.tokens.dark.bg : props.tokens.light.bg};
  color: ${(props) =>
    props.theme === 'dark' ? props.tokens.dark.text : props.tokens.light.text};
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isOpened ? 'space-between' : 'center')};
  padding: 15px;
  transition: justify-content 0.3s ease-in-out;
  img {
    width: ${(props) => (props.isOpened ? '40px' : '30px')};
    height: auto;
    margin-right: ${(props) => (props.isOpened ? '10px' : '0')};
    transition: margin-right 0.3s ease-in-out, width 0.3s ease-in-out;
  }
  span {
    display: ${(props) => (props.isOpened ? 'inline' : 'none')};
    font-size: 18px;
    font-weight: bold;
  }
  div {
    cursor: pointer;
  }
`;

const NavSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, padding-left 0.3s ease;
  padding-left: ${(props) => (props.isOpened ? '20px' : '10px')};

  &:hover {
    background-color: ${(props) =>
      props.theme === 'dark'
        ? props.tokens.dark.hover
        : props.tokens.light.hover};
  }

  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) =>
        props.theme === 'dark'
          ? props.tokens.dark.active
          : props.tokens.light.active};
      font-weight: bold;
    `}

  span {
    margin-left: ${(props) => (props.isOpened ? '15px' : '0')};
    display: ${(props) => (props.isOpened ? 'inline' : 'none')};
    transition: margin-left 0.3s ease-in-out;
  }
`;

const Sidebar = ({ color }) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleSidebar = () => setIsOpened((prev) => !prev);

  const designTokens = {
    light: {
      bg: '#f9f9f9',
      text: '#333',
      hover: '#e0e0e0',
      active: '#d1d1d1',
    },
    dark: {
      bg: '#333',
      text: '#f9f9f9',
      hover: '#444',
      active: '#555',
    },
  };

  const routes = [
    { title: 'Home', icon: 'house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
  ];

  return (
    <SidebarContainer theme={color} isOpened={isOpened} tokens={designTokens}>
      <LogoContainer isOpened={isOpened}>
        <img src={logo} alt="Logo" />
        <span>TensorFlow</span>
        <div onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
        </div>
      </LogoContainer>
      <NavSection>
        {routes.map((route) => (
          <NavItem
            key={route.title}
            isOpened={isOpened}
            theme={color}
            tokens={designTokens}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span>{route.title}</span>
          </NavItem>
        ))}
      </NavSection>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
