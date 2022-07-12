import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import pessoasApi from "../api/pessoasApi";

const Pessoas = () => {
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();

  function cadastrarPessoas() {
    pessoasApi.post("/", { nome, sobrenome });
    setNome("");
    setSobrenome("");
  }

  return (
    <div className="container">
      <h1>Cadastrar Pessoas</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          margin="normal"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Sobrenome"
          variant="outlined"
          margin="normal"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />
      </Box>
      <Stack spacing={2}>
        <Button variant="contained" color="success" onClick={cadastrarPessoas}>
          Cadastrar Pessoas
        </Button>
      </Stack>
    </div>
  );
};

export default Pessoas;
