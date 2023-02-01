import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 40px 4% 40px 4%;
  background-color: ${ props => props.theme.main };

  a{
    color: ${props => props.theme.text};
    text-decoration: none;
  }
`;

export {
  Container
}