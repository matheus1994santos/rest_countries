import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  padding: 12px 14px;
  font-size: 12px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.content};
  height: 100%;
`;


