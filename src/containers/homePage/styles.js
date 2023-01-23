import styled from "styled-components";

const StyledPatchCard = styled.section`
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto auto auto;
  gap: 60px;
  border: 1px solid ${ props => props.theme.colorShadow };
`;

export {
  StyledPatchCard,
}