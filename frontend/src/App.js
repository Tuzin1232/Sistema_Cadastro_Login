import './App.css';
import React from 'react';
import { Button, TextField, InputLabel, Select, MenuItem } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Switch from '@material-ui/core/Switch';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', 
    headerName: 'ID', 
    width: 90 
  },
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    editable: true,
  },
  {
    field: 'sistema',
    headerName: 'Sistema',
    width: 130,
    editable: true,
  },
  {
    field: 'valor',
    headerName: 'Valor',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'data_inicio',
    headerName: 'Data de Início',
    type: 'date',
    width: 170,
    editable: true,

  },
  {
    field: 'data_fim',
    headerName: 'Data de Término',
    type: 'date',
    width: 190,
    editable: true,

  },
  {
    field: 'ativo',
    headerName: 'Ativo',
    type: 'number',
    width: 110,
    editable: true,

  },
];

const rows = [

];function App() {
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
          <TextField id="meses_atrado" label="Meses em Atraso" type="number" />
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
          <TextField id="cnpj" label="CNPJ" type="number" />
          <TextField id="cpf" label="CPF" type="number" />
          <TextField id="telefone" label="Telefone" type="number" />
          <TextField id="celular" label="Celular" type="number" />
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
          <TextField id="numero" label="Número" type="number" />
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
          <TextField id="cep" label="CEP" type="number" />
          <TextField id="complemento" label="Complemento" />
          <TextField id="ip_acesso" label="IP de acesso" />
          <TextField id="obv" label="Observação" />
        </form>
      </div>
      <br></br>
      <div className="form">
        <p>Informações do Sistema</p>
        <form className="form_sistema" noValidate autoComplete="on" style={{ display: 'flex', gap: "10em", flexWrap: "wrap" }}>
          <div className="switch" style={{ display: "flex", gap: "1.5em" }}>
            <p>Ativo</p>
            <Switch
              color="primary"
              name="ativo"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
          <FormControl id="" className="tipo" style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">Sistema</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={1}>Assistência Social</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
          <TextField id="valor" label="Valor" type="number" />
          <form className="data_inicio" noValidate>
            <TextField
              id="data_inicio"
              label="Data de início"
              type="date"
              defaultValue="00-00-0000"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          <form className="data_fim" noValidate>
            <TextField
              id="data_fim"
              label="Data de Término"
              type="date"
              defaultValue="00-00-0000"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          <div style={{ height: 400, width: '100%', marginTop: '-6em', marginBottom: '-6em'}}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>Remover Selecionados</Button>
          <Button>Adicionar</Button>
        </ButtonGroup>

        </form>
      </div>








    </div>
  );
}

export default App;
