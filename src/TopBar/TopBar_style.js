import styled from 'styled-components';
// import { HiLogin } from 'react-icons/hi';

const TopBarHeader = styled.header`
    font-family: 'Righteous', cursive;
    background-color: #3A707B;
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 0 20px;
    margin-bottom: 50px;
`;
const Title = styled.h1`
  background-color: #3A707B;
  font-size: 34px;
  color: #ffffff;
`;
// const LogIn = styled(HiLogin)`
//   background-color: #3A707B;
//   color: #ffffff;
//   font-size: 30px;
// `;

export { TopBarHeader, Title };
