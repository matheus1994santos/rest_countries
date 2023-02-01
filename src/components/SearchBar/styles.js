import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;

  input::placeholder{
    color: ${props => props.theme.text2}
  }

  @media (max-width: 640px){
    gap: 34px;
    flex-direction: column;
  }
`;

const StyledBoxInputSearh = styled.div`
  display: flex;
  gap: 24px;
  width: 386px;
  margin-right: 100px;
  padding: 16px 28px;
  font-size: 12px;
  outline: none;
  border: none;
  box-shadow: 2px 1px 4px ${props => props.theme.colorShadow};
  background-color: ${props => props.theme.content};
  color: ${props => props.theme.text};
  border-radius: 4px;
`;

const StyledInputSearch = styled.input.attrs({type: 'search'})`
  font-size: 11px;
  outline: none;
  border: none;
  background-color: ${props => props.theme.content};
  color: ${props => props.theme.text};
`;

export {
  Container,
  StyledInputSearch,
  StyledBoxInputSearh
}