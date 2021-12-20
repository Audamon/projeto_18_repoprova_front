import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home.js';
import Login from './Login/Login.js';
import SignUp from './SignUp/SignUp.js';
import SendTests from './Tests/SendTests/SendTests.js';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Login />} ></Route>
      <Route path='/signup' exact element={<SignUp />}></Route>
      <Route path='/home' exact element={<Home />}></Route>
      <Route path='/tests/send' exact element={<SendTests />}></Route>
    </Routes>
    </BrowserRouter>
  );
}
