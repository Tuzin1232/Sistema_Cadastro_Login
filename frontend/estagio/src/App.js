import './App.css';
import React from 'react';
import { Button, TextField, InputLabel, Select, MenuItem } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Switch from '@material-ui/core/Switch';


function App() {
  return (
    <div className="App">
      <div className="btn_gerenciador">
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>Cancelar</Button>
          <Button>Salvar</Button>
          <Button>Concluído</Button>
        </ButtonGroup>

      </div>
      <div className="form">
        <p>Informações do contrato</p>
        <form className="form_contrato" noValidate autoComplete="on" style={{ display: 'flex', gap: "2em" }}>
          <TextField id="codigo" label="Código" />

            <p>Pode Avaliar</p>
            <Switch
              color="primary"
              name="avaliaar"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />

          <FormControl id="" className="tipo" style={{ width: "70px" }}>
            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
            <p>Pendencia Financeira</p>
            <Switch
              color="primary"
              name="pend_financeira"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <TextField id="meses_atrado" label="Meses em Atraso" />
            <p>Contrato Ativo</p>
            <Switch
              color="primary"
              name="contr_ativo"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </form>
      </div>
      <br></br>
      <div className="form">
        <p>Informações do Cliente</p>
        <form className="form_cliente" noValidate autoComplete="on" style={{ display: 'flex', gap: "1.5em", flexWrap: "wrap" }}>
          <TextField id="nome" label="Nome" />
          <TextField id="cnpj" label="CNPJ" />
          <TextField id="cpf" label="CPF" />
          <TextField id="telefone" label="Telefone" />
          <TextField id="celular" label="Celular" />
          <TextField id="contato" label="Contato" />
          <FormControl id="" className="ramo" style={{ width: "170px" }}>
            <InputLabel id="demo-simple-select-label">Ramo de Atividade</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
          <TextField id="cidade" label="Cidade" />
          <TextField id="rua" label="Rua" />
          <TextField id="bairro" label="Bairro" />
          <TextField id="numero" label="Número" />
          <FormControl id="" className="ramo">
            <InputLabel id="demo-simple-select-label">UF</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={1}>MG</MenuItem>
              <MenuItem value={2}>SP</MenuItem>
              <MenuItem value={3}>RJ</MenuItem>
            </Select>
          </FormControl>
          <TextField id="cep" label="CEP" />
          <TextField id="complemento" label="Complemento" />
          <TextField id="ip_acesso" label="IP de acesso" />
          <TextField id="obv" label="Observação" />
        </form>
      </div>
    </div>
  );
}

export default App;
