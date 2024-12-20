import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 1rem;
  margin: 2rem;
`;

export const Container = styled.div`
  grid-column: 1;
  grid-row: 1 / span 3;
  width: ${(props) => (props.isOpened ? "250px" : "100px")};
  display: flex;
  flex-direction: column;
  border: 4px double #f0f2ff;
  border-radius: 10px;
  transition: width 0.8s ease, transform 0.8s ease, background-color 0.8s ease,
    color 0.8s ease;
  background-color: ${(props) =>
    props.color === "dark"
      ? "var(--color-sidebar-background-dark-default)"
      : "var(--color-sidebar-background-light-default)"};

  color: ${(props) =>
    props.color === "dark"
      ? "var(--color-text-dark-default)"
      : "var(--color-text-light-default)"};
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  position: relative;
  overflow: visible;
  gap: 0 2rem;
`;

export const Logo = styled.div`
  display: flex;
  border-radius: 10px;
  align-items: center;
  margin: 1rem;
  cursor: default;

  img {
    width: 40px;
    margin-right: 10px;
    transition: transform 0.8s ease, padding-left 0.8s ease;
    padding-left: ${(props) => (props.isOpened ? "0" : "0.75rem")};
    transform: ${(props) => (props.isOpened ? "scale(1)" : "scale(1.2)")};
  }

  span {
    font-size: 1.2em;
    white-space: nowrap;
    overflow: hidden;
    opacity: ${(props) => (props.isOpened ? "1" : "0")};
    transition: opacity 0.8s ease, transform 0.8s ease;
    transform: ${(props) =>
      props.isOpened
        ? "translateX(0) scale(1)"
        : "translateX(20px) scale(0.1)"};
  }
`;

export const ArrowsLeftRight = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 5px double #f0f2ff;
  cursor: pointer;
  transition: transform 0.8s ease, background-color 0.8s ease;
  background-color: ${(props) =>
    props.color === "dark"
      ? "var(--color-arrows-background-dark-default)"
      : "var(--color-arrows-background-light-default)"};

  &:hover {
    background-color: ${(props) =>
      props.color === "dark"
        ? "var(--color-arrows-background-dark-active)"
        : "var(--color-arrows-background-light-active)"};
    transform: scale(1.1);
  }
`;
export const Theme = styled(ArrowsLeftRight)`
  align-self: center;
  grid-column: 2;
  grid-row: 2;
`;

export const ArrowsUpDown = styled(ArrowsLeftRight)`
  align-self: end;
  grid-column: 2;
  grid-row: 3;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 10px;
  padding-left: 2rem;
  transition: background-color 0.8s ease, padding-left 0.8s ease;
  background-color: ${(props) =>
    props.color === "dark"
      ? "var(--color-button-background-dark-default)"
      : "var(--color-button-background-light-default)"};

  &:hover {
    background-color: ${(props) =>
      props.color === "dark"
        ? "var(--color-sidebar-background-dark-hover)"
        : "var(--color-sidebar-background-light-hover)"};

    span {
      color: ${(props) =>
        props.color === "dark"
          ? "var(--color-text-dark-hover)"
          : "var(--color-text-light-hover)"};
    }

    svg {
      transform: scale(1.1);
    }
  }

  &.active {
    background-color: ${(props) =>
      props.color === "dark"
        ? "var(--color-button-background-dark-active)"
        : "var(--color-button-background-light-active)"};

    span {
      color: ${(props) =>
        props.color === "dark"
          ? "var(--color-text-dark-active)"
          : "var(--color-text-light-active)"};
    }
  }

  svg {
    transition: opacity 0.8s ease, transform 0.8s ease;
    margin-right: 20px;
    transform: ${(props) => (props.isOpened ? "scale(1)" : "scale(1.4)")};
  }

  span {
    margin-left: 10px;
    color: var(--color-text-light-default);
    transition: opacity 0.8s ease, transform 0.8s ease;
    opacity: ${(props) => (props.isOpened ? "1" : "0")};
    transform: ${(props) =>
      props.isOpened
        ? "translateX(0) scale(1)"
        : "translateX(20px) scale(0.1)"};
  }
`;

export const Sup = styled(Nav)`
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const SupItem = NavItem;
export const ProfItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  padding-left: 20px;
  transition: background-color 0.8s ease, padding-left 0.8s ease;
  background-color: ${(props) =>
    props.color === "dark"
      ? "var(--color-button-background-dark-default)"
      : "var(--color-button-background-light-default)"};

  &:hover {
    background-color: ${(props) =>
      props.color === "dark"
        ? "var(--color-sidebar-background-dark-hover)"
        : "var(--color-sidebar-background-light-hover)"};

    span {
      color: ${(props) =>
        props.color === "dark"
          ? "var(--color-text-dark-hover)"
          : "var(--color-text-light-hover)"};
    }
  }

  &.active {
    background-color: ${(props) =>
      props.color === "dark"
        ? "var(--color-button-background-dark-active)"
        : "var(--color-button-background-light-active)"};

    span {
      color: ${(props) =>
        props.color === "dark"
          ? "var(--color-text-dark-active)"
          : "var(--color-text-light-active)"};
    }
  }

  span {
    color: var(--color-text-light-default);
  }
`;

export const Prof = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-height: 70px;
  position: relative;
  transition: background-color 0.8s ease;
  background-color: ${(props) =>
    props.color === "dark"
      ? props.showProfile
        ? "var(--color-button-background-dark-active)"
        : "var(--color-sidebar-background-dark-default)"
      : props.showProfile
      ? "var(--color-button-background-light-active)"
      : "var(--color-button-background-light-default)"};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -2px;
    right: -2px;
    height: 1px;
    background-color: #e2e8f0;
  }

  img {
    opacity: ${(props) => (props.showProfile ? 0.3 : 1)};
    width: 40px;
    height: auto;
    border-radius: 10px;
    transition: transform 0.8s ease, opacity 0.8s ease;
    transform: ${(props) => (props.isOpened ? "scale(1)" : "scale(1.2)")};
  }
`;

export const ProfWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
  margin: 15px;
  cursor: default;
  width: 70%;

  img {
    width: 40px;
    height: auto;
    border-radius: 10px;
    opacity: ${(props) => (props.showProfile ? 0.3 : 1)};
    transition: transform 0.8s ease, margin-left 0.8s ease, opacity 0.8s ease;
    transform: ${(props) => (props.isOpened ? "scale(1)" : "scale(1.2)")};
    margin-left: ${(props) => (props.isOpened ? "0" : "0.75rem")};
  }
`;

export const ProfInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7em;
  transition: opacity 0.8s ease, transform 0.8s ease;
  opacity: ${(props) => (props.showProfile ? 0.3 : props.isOpened ? 1 : 0)};
  transform: ${(props) =>
    props.isOpened ? "translateX(0) scale(1)" : "translateX(20px) scale(0.1)"};

  p,
  h2 {
    margin: 0;
    flex: 1;
  }
`;

export const InfoBlock = styled.div`
  grid-column: 3;
  grid-row: 2 / span 2;
  align-self: end;
  border: 3px double #f0f2ff;
  border-radius: 10px;
  width: 200px;
  max-height: 300px;
  opacity: ${({ showProfile }) => (showProfile ? "1" : "0")};
  transform: translateY(${({ showProfile }) => (showProfile ? "0" : "50px")});
  transition: opacity 0.8s ease, transform 0.8s ease, background-color 0.8s ease,
    color 0.8s ease;
  background-color: ${(props) =>
    props.color === "dark"
      ? "var(--color-sidebar-background-dark-default)"
      : "var(--color-sidebar-background-light-default)"};

  color: ${(props) =>
    props.color === "dark"
      ? "var(--color-text-dark-default)"
      : "var(--color-text-light-default)"};
`;

export const BlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7em;
  margin-left: 10px;

  p,
  h2 {
    margin: 0;
    flex: 1;
  }
`;

export const ProfBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-height: 70px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -2px;
    right: -2px;
    height: 2px;
    background-color: #e2e8f0;
  }

  p {
    font-size: 10px;
    margin: 0;
    margin-bottom: 20px;

    span {
      text-decoration: underline;
    }
  }
`;
export const Logout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  cursor: pointer;
  padding: 10px;
`;
export const LogoutItem = styled.div``;

export const ProfBar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;
