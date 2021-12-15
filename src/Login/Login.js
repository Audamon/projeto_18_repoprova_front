import { Link } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
import {
  LoginPage, Form, Input, Button,
} from './Login_style';

export default function Login() {
  return (
      <LoginPage>
          <TopBar />
          <Form>
              <Input placeholder='Email'></Input>
              <Input placeholder='Senha'></Input>
              <Button>Entrar</Button>
          </Form>
          <Link to='/signup'>Primeira vez? Faça o cadastro!</Link>
      </LoginPage>
  );
}
