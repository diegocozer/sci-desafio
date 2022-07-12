import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Button, MenuItem, Select, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import api from "../api/api";
import axios from "axios";
import vinculoApi from "../api/vinculoApi";

const Vincular = () => {
  const [salaApi, setSalaApi] = useState([]);
  const [pessoasApi, setPessoasApi] = useState([]);
  const [pessoa, setPessoa] = useState();
  const [salaReuniao, setSalaReuniao] = useState();
  const [salaCafe, setSalaCafe] = useState();

  //chama a api da sala
  useEffect(() => {
    api.get("/").then((res) => setSalaApi(res.data));
  }, []);

  //chama a api das pessoas
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/backend_api/pessoa")
      .then((res) => setPessoasApi(res.data));
  }, []);
  //posta na api de vincular
  const vincularPessoas = (e) => {
    vinculoApi
      .post("/", { salaReuniao, salaCafe, pessoa })
      .then(console.log(pessoa));
  };

  return (
    <div className="container">
      <Box sx={{ m: 1, minWidth: 320 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Pessoas</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Pessoas"
            value={pessoa}
            onChange={(e) => setPessoa(e.target.value)}
          >
            {pessoasApi.map((data) => (
              <MenuItem key={data.id} value={data.nome + " " + data.sobrenome}>
                {data.nome + " " + data.sobrenome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ m: 1, minWidth: 320 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sala de Reunião</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sala de Reunião"
            value={salaReuniao}
            onChange={(e) => setSalaReuniao(e.target.value)}
          >
            {salaApi.map((data) => (
              <MenuItem key={data.id} value={data.sala}>
                {data.lotacao <= vinculoApi.length ? data.sala : "Sala Cheia"}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ m: 1, minWidth: 320 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sala de Café</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sala de Café"
            onChange={(e) => setSalaCafe(e.target.value)}
          >
            {salaApi.map((data, i) => (
              <MenuItem key={data.id} value={data.salaCafe}>
                {data.lotacaoCafe === vinculoApi["lotacaoCafe"]
                  ? "Sala Cheia"
                  : data.salaCafe}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {api["lotacao"] === vinculoApi["lotacao"] ? (
        <Stack spacing={2}>
          <Button variant="contained" color="success" onClick={vincularPessoas}>
            Vincular
          </Button>
        </Stack>
      ) : (
        <Stack spacing={2}>
          <Button variant="contained" color="error" disabled>
            Sala Cheia
          </Button>
        </Stack>
      )}
    </div>
  );
};

export default Vincular;
