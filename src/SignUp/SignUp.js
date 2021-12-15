import { Link } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
import {
  SignUpPage, Form, Input, Button,
} from './SignUp_style';

export default function SignUp() {
  return (
      <SignUpPage>
          <TopBar></TopBar>
          <Form>
              <Input placeholder="Nome"></Input>
              <Input placeholder="Email"></Input>
              <Input placeholder="Senha"></Input>
              <Input placeholder="Confirmar senha"></Input>
              <Button>Cadastrar</Button>
          </Form>
          <Link to='/'>Já tem uma conta? Faça o login!</Link>
      </SignUpPage>
  );
}
