import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from './../../components/Container';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  form: {
    margin: '20px 0 0',
    width: '100%',
    maxWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  input: {
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '5px',
    height: '44px',
    padding: '0 15px',
    fontSize: '14px',
    marginTop: '3px',
    textAlign: 'center',
  },
  button: {
    background: '#4bb0ee',
    border: 0,
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    height: '44px',
    margin: '10px 0 0',
    '&:hover': {
      background: '#42a1db',
    },
  },
});

const Login = (props) => {
  const classes = useStyles();
  const [nameFieldValue, setNameFieldValue] = useState('');
  const [passFieldValue, setPassFieldValue] = useState('');

  console.log(props);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('twitter-clone@username', nameFieldValue);
  }

  const handleNameChange = ({ target: { value }}) => {
    setNameFieldValue(value);
  } 

  const handlePassValue = ({ target: { value }}) => {
    setPassFieldValue(value);
  }

  return (
    <Container classes={{ root: classes.container }}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          value={nameFieldValue}
          onChange={handleNameChange}
          className={classes.input}
          type="text"
          placeholder="Nome de usuário"
        />
        <input
          value={passFieldValue}
          onChange={handlePassValue}
          className={classes.input}
          type="password"
          placeholder="Senha"
        />
        <button type="submit" className={classes.button}>Entrar</button>
      </form>
    </Container>
  );
}

export default Login;
