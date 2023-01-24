import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 975px;
  background-color: ${ props => props.theme.main };
`;

export {
  Container
}