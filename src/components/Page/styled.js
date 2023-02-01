import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.main};
  min-height: 960px;
`;

export {
  Container
}