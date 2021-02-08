import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import 'fontsource-roboto';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { Container, Typography, Box } from '@material-ui/core'

import {validarCPF, validarSenha} from './models/Cadastro'

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm" >
          <Typography variant="h3" component="h1" align="center">
            <FingerprintIcon/>
            Formulário Cadastro
        </Typography>
          <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{cpf:validarCPF, senha:validarSenha}} />
      </Container >
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}



export default App;
