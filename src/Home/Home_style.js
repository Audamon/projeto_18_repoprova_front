import styled from 'styled-components';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;

`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 30px;
  width: 45vw;
  height: 70vh;
`;
const Input = styled.input`
 font-family: 'Roboto', sans-serif;
  width: 40vw;
  height: 50px;
  border: none;
  padding: 0 0 0 20px;
  ::placeholder{
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
  }
  `;
const Button = styled.button`
 font-family: 'Roboto', sans-serif;
 font-size:24px;
  width: 40vw;
  height: 50px;
  border: none;
  color: #ffffff;
  background-color: #3A707B;
`;
export {
  HomePage, Form, Input, Button,
};
