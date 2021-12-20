import { useNavigate } from 'react-router-dom';
import {
  HomePage, Button, LogOut, ButtonsContainer,
} from './Home_style';
import TopBar from '../TopBar/TopBar';
import { logout } from '../Services/Api';

export default function Home() {
  const nav = useNavigate();
  function seeTest() {
    nav('/tests/see');
  }
  function sendTest() {
    nav('/tests/send');
  }
  function logOutButton() {
    logout();
    nav('/');
  }
  return (
    <HomePage>
      <TopBar />
      <LogOut onClick={logOutButton}/>
      <h1>O que desaja fazer?</h1>
      <ButtonsContainer>
        <Button onClick={seeTest}>Visualizar Prova</Button>
        <Button onClick={sendTest}>Enviar Prova</Button>
      </ButtonsContainer>
    </HomePage>
  );
}
