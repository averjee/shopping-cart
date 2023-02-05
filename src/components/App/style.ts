import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 90%;
  margin-left:5%;
  margin-right: 5%;
  margin-top:100px;
  margin-bottom: 100px;
`;

export const TwoColumnGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  max-width: 1200px;
  margin: 50px auto auto;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    grid-template-columns: 1fr 4fr;
    margin-top: 80px;
  }
`;

export const Side = styled.div`
  display: grid;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    align-content: baseline;
  }
`;

export const Main = styled.main``;

export const MainHeader = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;
  padding: 0 15px;
`;
