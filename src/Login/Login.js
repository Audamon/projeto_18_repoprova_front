import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TopBar from '../TopBar/TopBar';
import {
  LoginPage, Form, Input, Button,
} from './Login_style';
import { logIn } from '../Services/Api';

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function sendDataToLogin(e) {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    logIn(body);
    nav('/home');
  }
  return (
      <LoginPage>
          <TopBar />
          <Form onSubmit={sendDataToLogin}>
              <Input type={'email'} placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} ></Input>
              <Input type={'password'} placeholder='Senha' required value={password} onChange={(e) => setPassword(e.target.value)} ></Input>
              <Button type='submit' >Entrar</Button>
          </Form>
          <Link to='/signup'>Primeira vez? Faça o cadastro!</Link>
      </LoginPage>
  );
}
