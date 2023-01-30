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
      min-width: 480px;
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledCountryData = styled.div`
  color: ${props => props.theme.text};

  display: flex;
  flex-direction: column;
  gap: 14px;

  min-width: 500px;
  width: 100%;
  padding: 40px 10px;

  h1{
    font-size: 36px;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  color: ${props => props.theme.text};
  gap: 8px;
  
  ul{
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 20px;
  

    list-style-type: none;
    font-size: 20px;

    max-width: 500px;
    
    li{
      width: 258px;
    }

    span{
      color: ${props => props.theme.text2};
      font-weight: 300;
    }
  }
`;

export const StyledBorderCountries = styled.div`
  display: flex;
  flex-flow: wrap;
  max-width: 630px;
  gap: 10px;
  padding-top: 14px;
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