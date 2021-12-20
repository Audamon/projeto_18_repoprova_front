import { useNavigate } from 'react-router-dom';
import {
  HomePage, Button, LogOut, ButtonsContainer,
} from './Home_style';
import TopBar from '../TopBar/TopBar';

export default function Home() {
  const nav = useNavigate();
  function seeTest() {
    nav('/tests/see');
  }
  function sendTest() {
    nav('/tests/send');
  }
  return (
    <HomePage>
      <TopBar />
      <LogOut />
      <h1>O que desaja fazer?</h1>
      <ButtonsContainer>
        <Button onClick={seeTest}>Visualizar Prova</Button>
        <Button onClick={sendTest}>Enviar Prova</Button>
      </ButtonsContainer>
    </HomePage>
  );
}
