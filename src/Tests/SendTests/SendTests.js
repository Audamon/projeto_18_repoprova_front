import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomePage,
  Button,
  LogOut,
  ButtonsContainer,
  Input,
} from './SendTests_style';
import TopBar from '../../TopBar/TopBar';
import {
  getProfessors, getSubjects, sendDataTest, logout,
} from '../../Services/Api';

export default function SendTests() {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [types, setTypes] = useState('P1');
  const [professors, setProfessors] = useState([]);
  const [professorName, setProfessorName] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState('');
  const [url, setUrl] = useState('');
  useEffect(() => {
    const promise = getProfessors();
    promise.then((res) => setProfessors(res.data));
  }, []);
  useEffect(() => {
    if (!professorName) return;
    const promise = getSubjects(professorName);
    promise.then((res) => setSubjects(res.data));
  }, [professorName]);
  const handleChanges = (e) => {
    setTypes(e.target.value);
  };
  const handleChangesProfessor = (e) => {
    setProfessorName(e.target.value);
  };
  const handleChangesSubject = (e) => {
    setSubjectName(e.target.value);
  };
  function sendTest(e) {
    e.preventDefault();
    const body = {
      name,
      type: types,
      professor: professorName,
      subject: subjectName,
      url,
      pdf: '',
    };
    sendDataTest(body);
    nav('/home');
  }
  function logOutButton() {
    logout();
    nav('/');
  }
  return (
    <HomePage>
      <TopBar />
      <LogOut onClick={logOutButton} />
      <h1>Insira os dados</h1>
      <ButtonsContainer onSubmit={sendTest}>
        <Input
          type={'text'}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome da prova"
        ></Input>
        <div>
          <label>
            <input
              type={'radio'}
              value="P1"
              checked={types === 'P1'}
              onChange={handleChanges}
            ></input>
            P1
          </label>
          <label>
            <input
              type={'radio'}
              value="P2"
              checked={types === 'P2'}
              onChange={handleChanges}
            ></input>
            P2
          </label>
          <label>
            <input
              type={'radio'}
              value="P3"
              checked={types === 'P3'}
              onChange={handleChanges}
            ></input>
            P3
          </label>
          <label>
            <input
              type={'radio'}
              value="REC"
              checked={types === 'REC'}
              onChange={handleChanges}
            ></input>
            REC
          </label>
        </div>
        <div>
          <select onChange={handleChangesProfessor}>
            <option value={'selecione um professor'} key={0}>
              selecione um professor
            </option>
            {professors.map((professor) => (
              <option value={professor.name} key={professor.id}>
                {professor.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select onChange={handleChangesSubject}>
            <option value={'selecione uma disciplina'} key={0}>
              selecione uma disciplina
            </option>
            {subjects.map((subject) => (
              <option value={subject.name} key={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
        <Input
          type={'text'}
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Url da prova"
        ></Input>
        <Button type="submit">Enviar Prova</Button>
      </ButtonsContainer>
    </HomePage>
  );
}
