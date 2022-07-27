import styled from 'styled-components';


export const Container = styled.div`
  margin: 0;
  padding: 0;
  text-align:center;
`
export const Header = styled.header`
  display:grid;
  grid-template-columns:repeat(1, 1fr 6fr 1fr);
  justify-content: center;
  align-content: center;  
`


export const Area1 = styled.div`
  background-color:orange;
  height: 100vh;
`
export const Area2 = styled.div`
  background-color:orange;
  height: 100vh;
`
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgb(182, 177, 177);
  bottom: 0;
  width: 100%;
`