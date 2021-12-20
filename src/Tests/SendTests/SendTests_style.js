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
const ButtonsContainer = styled.form`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  margin:  30px 0 0 0;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  div{
      width: 55%;
      background-color: #ffffff;
      display: flex;
      justify-content: space-around;
     label{
        font-family: 'Roboto', sans-serif;
         background-color: #ffffff;
         font-size: 24px;
     }
     select{
         width: 90%;
         height: 40px;
         border: none;
         border-radius:3px;
         background-color: #3A707B;
         font-size:24px;
         color: #ffffff;
         option{
            color: #ffffff;
            background-color: #3A707B;
            font-size:24px;
            border-radius:10px;
         }
     }
    }

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
  position: absolute;
  right: 30px;
  top: 20px;
  background-color: #3A707B;
  color: #ffffff;
  font-size: 30px;
`;
const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  width: 40vw;
  height: 50px;
  border: none;
  padding: 0 0 0 20px;
  border-radius: 6px ;
  font-size: 24px;
  ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
  }
`;
export {
  HomePage, Button, LogOut, ButtonsContainer, Input,
};
