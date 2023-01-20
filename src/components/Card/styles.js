import styled from "styled-components";

export const Container = styled.div`
  max-width: 280px;
  height: 400px;
  background-color: ${ props => props.theme.content };
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  color: ${ props => props.theme.text };

  h1{
    padding: 18px 0;
    font-size: 26px;
  }

  nav{
    display: flex;
    flex-direction: column;
    gap: 4px;

    p > span{
      font-size: 20px;
    }

    p > a{
      padding-left: 2px;
      font-size: 18px;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const StyledImage = styled.div`
  width: 100%;
  padding-bottom: 10px;

  img{
    width: 100%;
    height: 200px;
  }
`;