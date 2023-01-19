import styled from "styled-components";

const StyledPatchCard = styled.section`
  display: flex;
  border: 1px solid ${ props => props.theme.colorShadow };
  height: 100%;
`;

export {
  StyledPatchCard,
}