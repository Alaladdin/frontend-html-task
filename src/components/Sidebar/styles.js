import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-sidebar-background-light-default);
  color: var(--color-text-light-default);
  width: ${(props) => (props.isOpened ? "250px" : "100px")};
  display: flex;
  flex-direction: column;
  border: 3px double #f0f2ff;
  border-radius: 10px;
  transition: width 0.4s ease, transform 0.4s ease;
  margin: 20px;
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
    transition: opacity $transition-duration ease;
    opacity: ${(props) => (props.isOpened ? "1" : "0")};
    transition: opacity $transition-duration ease;
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
  background-color: var(--color-button-background-light-active);
  margin-top: 5px;
  cursor: pointer;
  margin-left: ${(props) => (props.isOpened ? "68px" : "-94px")};

  transition: transform 0.8s ease, background-color 0.8s ease,
    margin-left 0.5s ease;

  &:hover {
    background-color: var(--color-button-background-dark-active);
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
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  padding-left: 20px;
  transition: background-color 0.5s ease, padding-left 0.5s ease;

  &:hover {
    background-color: var(--color-sidebar-background-light-hover);
  }

  &.active {
    background-color: var(--color-sidebar-background-light-active);
  }

  svg {
    transition: opacity 0.4s ease, transform 0.4s ease;
    margin-right: 20px;
    transform: ${(props) => (props.isOpened ? "scale(1)" : "scale(1.4)")};
  }

  span {
    margin-left: 10px;
    color: var(--color-text-light-default);
    transition: opacity $transition-duration ease;
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

export const Prof = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 10px;
  max-height: 70px;
  // overflow: hidden;
`;

export const ProfWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
  flex-shrink: 0;

  img {
    width: 40px;
    height: auto;
    margin-right: 10px;
    border-radius: 10px;
    transition: transform 0.8s ease;
    transform: ${(props) => (props.isOpened ? "scale(1)" : "scale(1.2)")};
  }
`;
export const ProfInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7em;
  margin-left: 10px;
  // margin-left: ${(props) => (props.isOpened ? "10px" : "0")};
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: ${(props) => (props.isOpened ? "1" : "0")};
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
  background-color: var(--color-button-background-light-active);
  margin-top: 5px;
  cursor: pointer;
  margin-left: ${(props) => (props.isOpened ? "78px" : "-74px")};

  transition: transform 0.8s ease, background-color 0.8s ease,
    margin-left 0.5s ease;

  &:hover {
    background-color: var(--color-button-background-dark-active);
  }
`;
