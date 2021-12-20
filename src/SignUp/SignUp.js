import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TopBar from '../TopBar/TopBar';
import {
  SignUpPage, Form, Input, Button,
} from './SignUp_style';
import { signUp } from '../Services/Api';

export default function SignUp() {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  function sendDataToSignUp(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas devem ser iguais!');
      setConfirmPassword('');
      setPassword('');
      return;
    }
    const body = {
      name,
      email,
      password,
    };
    signUp(body);
    nav('/');
  }
  return (
    <SignUpPage>
      <TopBar></TopBar>
      <Form onSubmit={sendDataToSignUp}>
        <Input
          placeholder="Nome"
          required
          type={'text'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          placeholder="Email"
          required
          type={'email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="Senha"
          required
          type={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          placeholder="Confirmar senha"
          required
          type={'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Input>
        <Button type='submit'>Cadastrar</Button>
      </Form>
      <Link to="/">Já tem uma conta? Faça o login!</Link>
    </SignUpPage>
  );
}
