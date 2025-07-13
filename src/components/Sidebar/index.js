import Sidebar from "./Sidebar.jsx";
import styled from "styled-components";
import * as animate from "./animations.js";

export default Sidebar;

export const ImgLogo = styled.img`
  width: 2rem;
  height: 2rem;
  padding-left: 0.37rem;
`;

export const ToggleSidebarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border-radius: 50%;
  background: var(--color-button-background-${(props) => props.$color}-${(props) => props.$isOpened ? 'active': 'default'});
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: ${(props) => props.$isOpened ? 'calc(100dvw - 89.35dvw)' : 'calc(100dvw - 95dvw)'};
  transition: background 300ms, left 200ms ease-in-out;

  &:hover {
    svg {
      color: var(--color-text-${(props) => props.$color}-hover);
    }
  }

  svg {
    color: var(--color-text-${(props) => props.$color}-default);
    transition: color 200ms ease-in-out;
  }
`;

export const LinkInnerBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.8rem;
  border-radius: 1rem;
  height: 1.25rem;
  width: ${(props) => props.$isOpened ? 'auto': '1.25rem'};
  cursor: pointer;
  transition: background 400ms, width 400ms ease-in-out;

  svg {
    color: var(--color-text-${(props) => props.$color}-default);
    transition: color 300ms ease-in-out;
  }

  &#theme-toggle { 
    span {
      margin-left: ${(props) => props.$color === 'light' ? '1rem' : '0.82rem'};
    }

    svg {
      margin-left: ${(props) => props.$color === 'light' ? '0.15rem' : '0.1rem'};
    }
  }

  &:hover {
    background: var(--color-sidebar-background-${(props) => props.$color}-hover);
    transition: background 300ms ease-in-out;

    span {
      color: var(--color-text-${(props) => props.$color}-hover);
      transition: color 300ms ease-in-out;
    }

    svg {
      color: var(--color-text-${(props) => props.$color}-hover);
      transition: color 300ms ease-in-out;
    }
  }

  &.active {
    background: var(--color-sidebar-background-${(props) => props.$color}-active);
    width: ${(props) => props.$isOpened ? 'auto': '1.25rem'};
    transition: background 400ms, width 400ms ease-in-out;

    span {
      visibility: ${(props) => props.$isOpened ? 'visible' : 'hidden'};
      opacity: ${(props) => props.$isOpened ? '1' : '0'};
      color: var(--color-text-${(props) => props.$color}-active);
      transition: visibility 0ms, opacity 300ms, color 300ms ease-in-out;
    }

    svg {
      color: var(--color-text-${(props) => props.$color}-active);
      transition: color 300ms ease-in-out;
    }
  }

`;

export const LinkDesc = styled.span`
  visibility: ${(props) => props.$show ? 'visible' : 'hidden'};
  opacity: ${(props) => props.$show ? '1' : '0'};
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text-${(props) => props.$color}-default);
  transition: visibility 0ms, opacity 300ms, color 300ms ease-in-out;
`;

export const LogoDesc = styled(LinkDesc)`
  font-size: 1.25rem;
  margin-left: 0.75rem;
  font-weight: 600;
  color: var(--color-text-logo-${(props) => props.$color}-default);
  visibility: ${(props) => props.$show ? 'visible' : 'hidden'};
  opacity: ${(props) => props.$show ? '1' : '0'};
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  position: relative;
`;

export const SidebarContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  width: ${(props) => props.$isOpened ? `calc(100dvw - 90dvw)` : `calc(100dvw - 97.5dvw)`};
  height: 92.5dvh;
  padding: 1.75rem;
  border-radius: 1.25rem;
  background: var(--color-sidebar-background-${(props) => props.$color}-default);
  transition: background 300ms, width 200ms ease-in-out;
`;

export const NavContainer = styled.nav`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.5rem;
  height: fit-content;
`;

export const NavBottomContainer = styled(NavContainer)`
  align-self: end;
`;


// use TS for props type control

/* SidebarContainer.propTypes = {
  $color: PropTypes.string,
  $isOpened: PropTypes.boolean,
}

LinkDesc.propTypes = {
  $color: PropTypes.string,
  $show: PropTypes.boolean,
}

LinkInnerBox.propTypes = {
  $color: PropTypes.string,
  $isOpened: PropTypes.boolean,
}

ToggleSidebarButton.propTypes = {
  $color: PropTypes.string,
  $isOpened: PropTypes.boolean,
} */