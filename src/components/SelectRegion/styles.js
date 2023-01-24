import styled from "styled-components";

export const Container = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  width: 210px;
  padding: 16px 28px;
  font-size: 12px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.content};
  height: 100%;

  a{
    cursor: pointer;
  }
`;

export const StyledSelectRegion = styled.div`
  position: absolute;
  top: 42px;
  left: -18px;
  display: flex;
  flex-direction: column;
  padding: 1px 18px;
  a{
    padding: 6px 18px;
    background-color: ${props => props.theme.content};
    width: 180px;
  }
`;