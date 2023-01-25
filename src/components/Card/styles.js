import styled from "styled-components";

export const Container = styled.div`
  width: 332px;
  padding-bottom: 20px;
  border-radius: 4px;
  background-color: ${ props => props.theme.content };
  box-shadow: 2px 1px 4px ${props => props.theme.colorShadow};
  cursor: pointer;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
  color: ${ props => props.theme.text };

  h1{
    padding: 18px 0;
    font-size: 29px;
  }

  nav{
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    gap: 4px;

    p > span{
      font-size: 20px;
    }

    p > a{
      padding-left: 2px;
      font-size: 18px;
      font-weight: 300;
      color: ${props => props.theme.text2}; // rgba(255, 255, 255, 0.5);
    }
  }
`;

export const StyledImage = styled.div`
  width: 100%;
  padding-bottom: 10px;

  img{
    border-radius: 6px 6px 0px 0px;
    width: 100%;
    height: 200px;
  }
`;