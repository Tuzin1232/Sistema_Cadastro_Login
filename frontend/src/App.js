import './App.css';
import React, { useState } from 'react';
import { Button, TextField, InputLabel, Select, MenuItem } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Switch from '@material-ui/core/Switch';
import { DataGrid } from '@material-ui/data-grid';
import { columns } from './props/sistemaRepos'
import { useForm, Controller } from "react-hook-form"

function App() {
  const [valor, setValor] = useState("");
  const [sistemas, setSistemas] = useState([])

  const tabelaValor = {valor}
  
  const onSubmit = function(data) {
    data["sistemas"] = sistemas
    fetch('http://localhost:3000/api/cadastro', {
    method: 'POST',
    mode: 'cors',
    body: data
  });
  } 
  
  const { control, handleSubmit } = useForm();
  const handleChange = e => setValor(e.target.value);
  
  console.log(sistemas)

  function getValores() {
    let infoSistema = {
      id: sistemas.length +1,
      ativo: document.getElementById("ativo").checked?"Sim":"Não",
      sistema: tabelaValor.valor,
      data_inicio: document.getElementById("data_inicio").value,
      data_fim: document.getElementById("data_fim").value,
      valor: document.getElementById("valor").value
    }
    setSistemas([...sistemas, infoSistema])

    }
  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <div className="btn_gerenciador">
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button type="reset">Cancelar</Button>
          <Button type="submit" id="btnSalvar">Salvar</Button>
        </ButtonGroup>

      </div>
      <div className="form">
        <p>Informações do contrato</p>
        <form className="form_contrato" noValidate autoComplete="on" style={{ display: 'flex', gap: "2em" }}>

          <Controller
            name="codigo"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField disabled id="codigo" label="Código" {...field} />}
          />

          <p>Pode Avaliar</p>
          <Controller
            name="avaliar"
            control={control}
            defaultValue={false}
            render={({ field }) => <Switch id="avaliar" name="avaliar" label="Pode Avaliar" inputProps={{ 'aria-label': 'primary checkbox' }} {...field} />}
          />

          <FormControl id="tipoForm" className="tipo" style={{ width: "70px" }}>
            <InputLabel id="tipoLabel">Tipo</InputLabel>
            <Controller
              name="tipo"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select labelId="" id="tipo" {...field}>
                  <MenuItem value={1}>1 </MenuItem>
                  <MenuItem value={2}>2 </MenuItem>
                  <MenuItem value={3}>3 </MenuItem>
                </Select>
              )
              }
            />

          </FormControl>

          <p>Pendencia Financeira</p>
          <Controller
            name="pend_financeira"
            control={control}
            defaultValue={false}
            render={({ field }) => <Switch id="pendFinanc" color="primary" name="pend_financeira" inputProps={{ 'aria-label': 'primary checkbox' }}{...field} />} />

          <Controller
            name="meses_atrado"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="meses_atrado" label="Meses em Atraso" type="number"{...field} />} />

          <p>Contrato Ativo</p>
          <Controller
            name="contrato_atv"
            control={control}
            defaultValue={false}
            render={({ field }) => <Switch id="contrato_atv" color="primary" name="contrato_atv" inputProps={{ 'aria-label': 'primary checkbox' }}{...field} />} />

        </form>
      </div>
      <br></br>
      <div className="form">
        <p>Informações do Cliente</p>
        <form className="form_cliente" noValidate autoComplete="on" style={{ display: 'flex', gap: "1.5em", flexWrap: "wrap" }}>

          <Controller
            name="nome"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="nome" label="Nome" {...field} />}
          />

          <Controller
            name="cnpj"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="cnpj" label="CNPJ" type="number" {...field} />}
          />

          <Controller
            name="cpf"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="cpf" label="CPF" type="number" {...field} />}
          />
          <Controller
            name="telefone"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="telefone" label="Telefone" type="number" {...field} />}
          />
          <Controller
            name="celular"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="celular" label="Celular" type="number" {...field} />}
          />

          <Controller
            name="contato"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="contato" label="Contato" {...field} />}
          />

          <FormControl id="ramoForm" className="ramo" style={{ width: "170px" }}>
            <InputLabel id="ramoLabel">Ramo de Atividade</InputLabel>
            <Controller
              name="ramo"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select labelId="" id="ramoAtv" {...field}>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              )
              }
            />
          </FormControl>

          <Controller
            name="cidade"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="cidade" label="Cidade" {...field} />}
          />

          <Controller
            name="rua"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="rua" label="Rua" {...field} />}
          />

          <Controller
            name="bairro"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="bairro" label="Bairro" {...field} />}
          />

          <Controller
            name="numero"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="numero" label="Número" type="number" {...field} />}
          />

          <FormControl id="UFForm" className="UF" style={{ width: "70px" }}>
            <InputLabel id="UFLabel">UF</InputLabel>
            <Controller
              name="UF"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select labelId="" id="UF" {...field}>
                  <MenuItem value={1}>MG</MenuItem>
                  <MenuItem value={2}>SP</MenuItem>
                  <MenuItem value={3}>RJ</MenuItem>
                </Select>
              )
              }
            />
          </FormControl>

          <Controller
            name="number"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="cep" label="CEP" type="number" {...field} />}
          />
          <Controller
            name="complemento"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="complemento" label="Complemento" {...field} />}
          />
          <Controller
            name="ip_acesso"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="ip_acesso" label="IP de acesso" {...field} />}
          />

          <Controller
            name="obv"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField id="obv" label="Observação" {...field} />}
          />

        </form>
      </div>
      <br></br>
      <div className="form">
        <p>Informações do Sistema</p>
        <div className="form_sistema" noValidate autoComplete="on" style={{ display: 'flex', gap: "10em", flexWrap: "wrap" }}>
          <div className="switch" style={{ display: "flex", gap: "1.5em" }}>
            <p>Ativo</p>
            <Switch
              id="ativo"
              color="primary"
              name="ativo"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
          <FormControl id="" className="tipo" style={{ width: "200px" }}>
            <InputLabel id="sisLabel">Sistema</InputLabel>

            <Select
              onChange={handleChange}
              labelId="sisLabelId"
              id="sistema"
              defaultValue="Assistência Social"
            >
              <MenuItem value={"Assistência Social"}>Assistência Social</MenuItem>
              <MenuItem value={"CRM"}>CRM</MenuItem>
              <MenuItem value={"Educação"}>Educação</MenuItem>
              <MenuItem value={"Portal Cidadão"}>Portal Cidadão</MenuItem>
              <MenuItem value={"S-Commerce"}>S-Commerce</MenuItem>
              <MenuItem value={"SADM"}>SADM</MenuItem>
              <MenuItem value={"SAS"}>SAS</MenuItem>
              <MenuItem value={"Saúde"}>Saúde</MenuItem>
              <MenuItem value={"SCA"}>SCA</MenuItem>
              <MenuItem value={"SCA/SAS"}>SCA/SAS</MenuItem>
              <MenuItem value={"SE"}>SE</MenuItem>

            </Select>

              

          </FormControl>
          <TextField id="valor" label="Valor" type="number" />
          <div className="data_inicio" noValidate>
            <TextField
              id="data_inicio"
              label="Data de início"
              type="date"
              defaultValue="00-00-0000"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="data_fim" noValidate>
            <TextField
              id="data_fim"
              label="Data de Término"
              type="date"
              defaultValue="00-00-0000"
              InputLabelProps={{
              shrink: true,
              }}
            />
          </div>
          <div style={{ height: 400, width: '100%', marginTop: '-6em', marginBottom: '-6em' }}>
            <DataGrid
              rows={sistemas}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button id="remove_selec">Remover Selecionados</Button>
            <Button id="add" onClick={getValores}>Adicionar</Button>
          </ButtonGroup>

        </div>
      </div>
    </form>
  );
}
export default App;
