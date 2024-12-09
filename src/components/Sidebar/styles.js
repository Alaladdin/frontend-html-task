import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

export const Container = styled.div`
  width: ${(props) => (props.isOpened ? "250px" : "100px")};
  display: flex;
  flex-direction: column;
  border: 4px double #f0f2ff;
  border-radius: 10px;
  transition: width 0.4s ease, transform 0.4s ease;
  margin: 20px 20px 0px 20px;
  background-color: ${(props) =>
    props.color === "dark"
      ? "var(--color-sidebar-background-dark-default)"
      : "var(--color-sidebar-background-light-default)"};

  color: ${(props) =>
    props.color === "dark"
      ? "var(--color-text-dark-default)"
      : "var(--color-text-light-default)"};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  align-items: center;
  margin: 15px;
  cursor: default;

  img {
    width: 40px;
    height: auto;
    margin-right: 10px;
    transition: transform 0.5s ease, padding-left 0.5s ease;
    padding-left: ${(props) => (props.isOpened ? "0px" : "12px")};
    transform: ${(props) => (props.isOpened ? "scale(1)" : "scale(1.2)")};
  }

  span {
    font-size: 1.2em;
    white-space: nowrap;
    overflow: hidden;
    opacity: ${(props) => (props.isOpened ? "1" : "0")};
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: ${(props) =>
      props.isOpened
        ? "translateX(0) scale(1)"
        : "translateX(150px) scale(0.1)"};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  border: 2px double #fff;
  margin-top: 5px;
  cursor: pointer;
  margin-left: ${(props) => (props.isOpened ? "64px" : "-97px")};
  transition: transform 0.8s ease, background-color 0.8s ease,
    margin-left 0.5s ease;
  background-color: ${(props) =>
    props.color === "dark"
      ? "var(--color-button-background-dark-default)"
      : "var(--color-button-background-light-active)"};

  &:hover {
    background-color: ${(props) =>
      props.color === "dark"
        ? "var(--color-button-background-dark-active)"
        : "var(--color-button-background-dark-active)"};
    transform: scale(1.1);
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  padding-left: 20px;
  transition: background-color 0.5s ease, padding-left 0.5s ease;
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

  svg {
    transition: opacity 0.4s ease, transform 0.4s ease;
    margin-right: 20px;
    transform: ${(props) => (props.isOpened ? "scale(1)" : "scale(1.4)")};
  }

  span {
    margin-left: 10px;
    color: var(--color-text-light-default);
    transition: opacity 0.5s ease, transform 0.5s ease;
    opacity: ${(props) => (props.isOpened ? "1" : "0")};
    transform: ${(props) =>
      props.isOpened
        ? "translateX(0) scale(1)"
        : "translateX(150px) scale(0.1)"};
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
  transition: background-color 0.5s ease, padding-left 0.5s ease;
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
  padding-left: 10px;
  max-height: 70px;
  position: relative;
  border-radius: 0 0 7px 7px;
  transition: background-color 0.5s ease;
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
`;

export const ProfWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
  flex-shrink: 0;
  cursor: default;

  img {
    opacity: ${(props) => (props.showProfile ? 0.3 : 1)};
    width: 40px;
    height: auto;
    margin-left: ${(props) => (props.isOpened ? "0px" : "5px")};
    margin-right: 10px;
    border-radius: 10px;
    transition: transform 0.8s ease, margin-left 0.8s ease, opacity 0.5s ease;
    transform: ${(props) => (props.isOpened ? "scale(1)" : "scale(1.2)")};
  }
`;
export const ProfInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7em;
  margin-left: 10px;
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: ${(props) => (props.showProfile ? 0.3 : 1)};
  transform: ${(props) =>
    props.isOpened ? "translateX(0) scale(1)" : "translateX(150px) scale(0.1)"};

  p,
  h2 {
    margin: 0;
    flex: 1;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  border: 2px double #fff;
  margin-top: 5px;
  cursor: pointer;
  margin-left: ${(props) => (props.isOpened ? "72px" : "-82px")};
  transition: transform 0.8s ease, background-color 0.8s ease,
    margin-left 0.5s ease;
  background-color: ${(props) =>
    props.color === "dark"
      ? "var(--color-button-background-dark-default)"
      : "var(--color-button-background-light-active)"};

  &:hover {
    background-color: ${(props) =>
      props.color === "dark"
        ? "var(--color-button-background-dark-active)"
        : "var(--color-button-background-dark-active)"};
    transform: scale(1.1);
  }
`;

export const InfoBlock = styled.div`
  border: 3px double #f0f2ff;
  border-radius: 10px;
  margin: 20px 0px 0px 0px;
  width: 200px;
  max-height: 300px;
  opacity: ${({ showProfile }) => (showProfile ? "1" : "0")};
  transform: translateY(${({ showProfile }) => (showProfile ? "0" : "50px")});
  transition: opacity 0.5s ease, transform 0.5s ease;
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
    height: 1px;
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
