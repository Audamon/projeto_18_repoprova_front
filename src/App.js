import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login.js';
import SignUp from './SignUp/SignUp.js';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Login />} ></Route>
      <Route path='/signup' exact element={<SignUp />}></Route>
    </Routes>
    </BrowserRouter>
  );
}
