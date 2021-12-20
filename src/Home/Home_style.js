import styled from 'styled-components';
import { HiLogout } from 'react-icons/hi';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  h1{
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 80vw;
  height: 15vh;
  margin:  30px 0 0 0;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px

`;
const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  width: 30vw;
  height: 50px;
  border: none;
  color: #ffffff;
  background-color: #3a707b;
  border-radius: 6px ;
`;
const LogOut = styled(HiLogout)`
  position: fixed;
  right: 30px;
  top: 20px;
  background-color: #3A707B;
  color: #ffffff;
  font-size: 30px;
`;
export {
  HomePage, Button, LogOut, ButtonsContainer,
};
