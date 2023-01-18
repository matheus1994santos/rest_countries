import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const InputSearch = styled.input.attrs({type: 'search'})`
  width: 350px;
  padding: 12px 12px;
  font-size: 11px;
  outline: none;
  border: none;
  box-shadow: 2px 1px 1px ${props => props.theme.colorShadow};
  background-color: ${props => props.theme.content};
`;

export {
  Container,
  InputSearch
}