import axios from 'axios';
// const apiUrl = https://repo-prova-back.herokuapp.com/

const apiUrl = 'http://localhost:5000/';

function storeUser(token) {
  const serialUser = JSON.stringify(token);
  localStorage.setItem('token', serialUser);
}
function getStoredUser() {
  const serialUser = localStorage.getItem('token');
  const token = JSON.parse(serialUser);
  return token;
}

function signUp(body) {
  const route = 'signUp';
  axios.post(apiUrl + route, body);
}

function logIn(body) {
  const route = 'login';
  const promise = axios.post(apiUrl + route, body);
  promise.catch((err) => {
    if (err.response.status === 401) {
      alert('Dados inválidos!');
    }
  });
  promise.then((res) => {
    storeUser(res.data);
  });
}

function getProfessors() {
  const config = {
    headers: {
      Authorization: `Bearer ${getStoredUser()}`,
    },
  };
  const route = 'test/professor';
  const promise = axios.get(apiUrl + route, config);
  promise.catch((err) => {
    if (err.response.status === 401) {
      alert('Ação não permertida');
    }
  });
  return promise;
}
function getSubjects(professorName) {
  const config = {
    headers: {
      Authorization: `Bearer ${getStoredUser()}`,
    },
  };
  const route = `test/subject/${professorName}`;
  const promise = axios.get(
    apiUrl + route,
    config,
  );
  promise.catch((err) => {
    if (err.response.status === 401) {
      alert('Ação não permertida');
    }
  });
  return promise;
}

function sendDataTest(body) {
  const config = {
    headers: {
      Authorization: `Bearer ${getStoredUser()}`,
    },
  };
  const route = 'test';
  const promise = axios.post(apiUrl + route, body, config);
  promise.catch((err) => {
    if (err.response.status === 401) {
      alert('Ação não permertida');
    }
    if (err.response.status === 400) {
      alert('Preencha todos os campos');
    }
  });
}

function logout() {
  const config = {
    headers: {
      Authorization: `Bearer ${getStoredUser()}`,
    },
  };
  const route = 'logout';
  axios.delete(apiUrl + route, config);
  localStorage.clear();
}

export {
  signUp, logIn, getProfessors, getSubjects, sendDataTest, logout,
};
