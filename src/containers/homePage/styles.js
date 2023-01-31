import styled from "styled-components";

const StyledPatchCard = styled.section`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: auto auto auto auto;
  gap: 24px;

    a{
      color: ${props => props.theme.text};
      text-decoration: none;
    }

  @media (max-width: 812px){
    justify-content: center;
    gap: 20px
  }
`;

export {
  StyledPatchCard,
}