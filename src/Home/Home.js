import { Link } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
import {
  HomePage, Form, Input, Button,
} from './Home_style';

export default function Home() {
  return (
      <HomePage>
          <TopBar />
          <Form>
              <Input placeholder='Nome'></Input>
              <Input placeholder='Email'></Input>
              <Input placeholder='Senha'></Input>
              <Input placeholder='Confirmar Senha'></Input>
              <Button>Entrar</Button>
          </Form>
          <Link to='/signup'>Primeira vez? Faça o cadastro</Link>
      </HomePage>
  );
}
