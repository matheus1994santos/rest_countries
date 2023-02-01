import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 40px;
  padding-top: 10px;
`;

export const StyledCountryInfo = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  /* height: 100vh; */

  img{
    max-width: 580px;
    width: 100%;

    @media (max-width: 515px){
      height: 300px;
    }
  }

  @media (max-width: 1200px){
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

`;

export const StyledCountryData = styled.div`
  color: ${props => props.theme.text};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  min-width: 340px;
  width: 100%;
  padding: 0px 16px;

  h1{
    font-size: 36px;
    padding-left: 16px;
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
    padding: 0 16px;
    padding-top: 20px;
  

    list-style-type: none;
    font-size: 20px;

    max-width: 500px;
    @media (max-width: 900px){
      max-width: 700px;
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
  padding: 0 16px;
  padding-top: 10px;
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