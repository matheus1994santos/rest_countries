import styled from "styled-components";

export const Container = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 200px;
  padding: 16px 14px;
  font-size: 13px;
  border-radius: 6px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.content};
  box-shadow: 2px 1px 4px ${props => props.theme.colorShadow};
  height: 100%;

  p{
    cursor: pointer;
  }

  nav{
    cursor: pointer;
    display: flex;
    width: 100%;
    justify-content: space-between;
    
    img{
      height: 18px;
      width: 18px;
      color: white;
      stroke: white;
    }
  }

`;

export const StyledSelectRegion = styled.div`
  position: absolute;
  top: 50px;
  left: -18px;
  display: ${({open}) => open ? 'flex' : 'none'};
  flex-direction: column;
  padding: 4px 18px;
  p{
    padding: 8px 18px;
    background-color: ${props => props.theme.content};
    width: 260px;
  }
`;