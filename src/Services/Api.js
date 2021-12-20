import axios from 'axios';
// https://repo-prova-back.herokuapp.com/

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
  axios.post('http://localhost:5000/signup', body);
}

function logIn(body) {
  const promise = axios.post('http://localhost:5000/login', body);
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
  const promise = axios.get('http://localhost:5000/test/professor', config);
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
  const promise = axios.get(
    `http://localhost:5000/test/subject/${professorName}`,
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
  const promise = axios.post('http://localhost:5000/test', body, config);
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
  axios.delete('http:localhost:5000/logout', config);
  localStorage.clear();
}

export {
  signUp, logIn, getProfessors, getSubjects, sendDataTest, logout,
};
