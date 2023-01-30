import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 40px 4% 40px 4%;
  height: 100%;

  a{
    color: ${props => props.theme.text};
    text-decoration: none;
  }
`;

export {
  Container
}