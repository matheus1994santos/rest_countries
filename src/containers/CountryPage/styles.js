import styled from "styled-components";

export const StyledCountryInfo = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  max-height: 437px;

  article{
    box-shadow: 0px 0px 11px ${props => props.theme.colorShadow};
    max-width: 720px;
    width: 100%;
    img{
      background-size: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledCountryData = styled.div`
  color: ${props => props.theme.text};

  display: flex;
  flex-direction: column;
  gap: 40px;

  max-width: 940px;
  width: 100%;
  padding: 46px 0px;

  h1{
    font-size: 36px;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  color: ${props => props.theme.text};
  
  ul{
    display: flex;
    flex-direction: column;
    gap: 10px;

    list-style-type: none;
    font-size: 20px;

    max-width: 500px;
    width: 100%;

    span{
      color: ${props => props.theme.text2};
      font-weight: 300;
    }
  }
`;

export const StyledBorderCountries = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 50px;
`;

export const StyledButtonCountries = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  font-size: 13px;
  height: 18px;
  padding: 2px 0px;

  color: ${props => props.theme.text2};
  background-color: ${props => props.theme.content};
  box-shadow: 0px 0px 10px ${props => props.theme.colorShadow};

  cursor: pointer;
`;