import Sidebar from "./Sidebar.jsx";
import styled from "styled-components";

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
  left: ${(props) => props.$isOpened ? 'calc(100dvw - 89.35dvw)' : 'calc(100dvw - 94.35dvw)'};

  &:hover {
    svg {
      color: var(--color-text-${(props) => props.$color}-hover);
    }
  }

 
  svg {
    color: var(--color-text-${(props) => props.$color}-default);
  }
`;

export const LinkInnerBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.8rem;
  background: var(--color-sidebar-background-${(props) => props.$color}-default);
  border-radius: 1rem;
  height: 1.25rem;
  width: ${(props) => props.$isOpened ? 'auto': '1.25rem'};
  cursor: pointer;

  svg {
    color: var(--color-text-${(props) => props.$color}-default);
  }

  &:hover {
    background: var(--color-sidebar-background-${(props) => props.$color}-hover);

    span {
      color: var(--color-text-${(props) => props.$color}-hover);
    }

    svg {
      color: var(--color-text-${(props) => props.$color}-hover);
    }
  }

  &.active {
    background: var(--color-sidebar-background-${(props) => props.$color}-active);

    span {
      color: var(--color-text-${(props) => props.$color}-active);
    }

    svg {
      color: var(--color-text-${(props) => props.$color}-active);
    }
  }

`;

export const LinkDesc = styled.span`
  display: ${(props) => props.$show ? 'inline' : 'none'};
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text-${(props) => props.$color}-default);
`;

export const LogoDesc = styled(LinkDesc)`
  font-size: 1.25rem;
  margin-left: 0.75rem;
  font-weight: 600;
  color: var(--color-text-logo-${(props) => props.$color}-default);

  &:hover {
    color: 
  }
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
  width: ${(props) => props.$isOpened ? `calc(100dvw - 90dvw)` : `calc(100dvw - 96.87dvw)`};
  height: 92dvh;
  padding: 1.75rem;
  border-radius: 1.25rem;
  background: var(--color-sidebar-background-${(props) => props.$color}-default);
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