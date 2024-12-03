import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-sidebar-background-light-default);
  color: var(--color-text-light-default);
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 3px double #f0f2ff;
  border-radius: 10px;
  transition: width $transition-duration ease;
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
  }

  span {
    font-size: 1.2em;
    white-space: nowrap;
    overflow: hidden;
    transition: opacity $transition-duration ease;
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
  margin-left: 18px;
  cursor: pointer;

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
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    border-radius: 10px;
    background-color: var(--color-sidebar-background-light-hover);
  }

  &.active {
    background-color: var(--color-sidebar-background-light-active);
  }

  span {
    margin-left: 10px;
    color: var(--color-text-light-default);
  }
`;

export const Sup = styled(Nav)`
  margin-top: 20%;
  margin-bottom: 10%;
`;
export const SupItem = NavItem;

export const Prof = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  justify-content: space-around;
`;
export const ProfWrapper = styled.div`
  display: flex;
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 20%;
    flex-shrink: 0;
  }
`;
export const ProfInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7em;

  p,
  h2 {
    margin: 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--color-button-background-light-default);
  cursor: pointer;

  &:hover {
    background-color: var(--color-button-background-dark-active);
  }
`;
