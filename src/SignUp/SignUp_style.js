import styled from 'styled-components';

const SignUpPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    font-family: 'Roboto', sans-serif;
    margin-top: 10px;
    text-decoration: none;
    color: #3a707b;
    font-size: 24px;
  }
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
  border-radius: 6px ;
  ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
  }
`;
const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  width: 40vw;
  height: 50px;
  border: none;
  color: #ffffff;
  background-color: #3a707b;
  border-radius: 6px ;
`;
export {
  SignUpPage, Form, Input, Button,
};
