import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 6px 0px;
`;

export const StyledButtonBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 30px;
  background-color: ${props => props.theme.content};
  color: ${props => props.theme.text};
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 11px ${props => props.theme.colorShadow};
  cursor: pointer;

  a{
    color: ${props => props.theme.text};
    text-decoration: none;
  }
`;