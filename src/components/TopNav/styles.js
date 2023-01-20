import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 79px;
  /* height: 100%; */
  box-shadow: 0px 3px 20px ${props=> props.theme.colorShadow};
  background-color: ${props => props.theme.content};
  color: ${props => props.theme.text};
  padding: 0 4%;
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 22px;
`;

export {
  Container,
  Bar,
  Title
}