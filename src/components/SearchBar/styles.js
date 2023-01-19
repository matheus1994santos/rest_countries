import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;

  input::placeholder{
    color: ${props => props.theme.text}
  }
`;

const InputSearch = styled.input.attrs({type: 'search'})`
  max-width: 500px;
  width: 100%;
  padding: 16px 28px;
  font-size: 12px;
  outline: none;
  border: none;
  box-shadow: 2px 1px 4px ${props => props.theme.colorShadow};
  background-color: ${props => props.theme.content};
  color: ${props => props.theme.text};
  border-radius: 4px;
`;

export {
  Container,
  InputSearch
}