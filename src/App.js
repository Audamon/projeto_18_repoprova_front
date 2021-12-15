import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home />} ></Route>
    </Routes>
    </BrowserRouter>
  );
}
