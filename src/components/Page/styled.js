import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: ${ props => props.theme.main };
`;

export {
  Container
}