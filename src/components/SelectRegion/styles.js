import styled from "styled-components";

export const Container = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  padding: 16px 14px;
  font-size: 14px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.content};
  box-shadow: 2px 1px 4px ${props => props.theme.colorShadow};
  height: 100%;

  a{
    cursor: pointer;
  }
`;

export const StyledSelectRegion = styled.div`
  position: absolute;
  top: 50px;
  left: -18px;
  display: ${({open}) => open ? 'flex' : 'none'};
  flex-direction: column;
  padding: 4px 18px;
  a{
    padding: 6px 18px;
    background-color: ${props => props.theme.content};
    width: 260px;
  }
`;