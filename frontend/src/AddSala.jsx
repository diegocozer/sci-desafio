import { useState, useEffect } from "react";
import API from "../src/api/api";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import Stack from "@mui/material/Stack";

const AddSala = ({ onAdd }) => {
  const [sala, setSala] = useState("");
  const [salaCafe, setSalaCafe] = useState("");
  const [lotacao, setLotacao] = useState("");
  const [lotacaoCafe, setLotacaoCafe] = useState("");
  const [movieId, setMovieId] = useState(null);
  const [listApi, setListApi] = useState([]);

  useEffect(() => {
    recarregar();
  }, []);

  const recarregar = () => {
    API.get("/")
      .then((res) => {
        setListApi(res.data);
      })
      .catch(console.error);
  };

  console.log(listApi.length);

  const onSubmit = (e) => {
    let item = { sala, salaCafe, lotacao, lotacaoCafe };
    API.post("/", item).then(() => recarregar());
    setSala("");
    setSalaCafe("");
    setLotacao("");
    setLotacaoCafe("");
  };

  const onUpdate = (id) => {
    let item = { sala };
    API.patch(`/${id}/`, item).then((res) => recarregar());
    console.log(id);
  };

  return (
    <div className="container">
      <h1>Cadastrar Salas</h1>
      <span>Cadastre duas salas de reunião e duas salas de café</span>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
      >
        <div className="text-fields">
          <div>
            <TextField
              id="outlined-basic"
              label="Cadastrar Sala Reunião"
              variant="outlined"
              margin="normal"
              value={sala}
              onChange={(e) => setSala(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Cadastrar Sala de Café"
              variant="outlined"
              margin="normal"
              value={salaCafe}
              onChange={(e) => setSalaCafe(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Lotação Sala de Reunião"
              variant="outlined"
              type="number"
              margin="normal"
              value={lotacao}
              onChange={(e) => setLotacao(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Lotação Sala de Café"
              variant="outlined"
              type="number"
              margin="normal"
              value={lotacaoCafe}
              onChange={(e) => setLotacaoCafe(e.target.value)}
            />
          </div>
        </div>
      </Box>

      {listApi.length <= 1 ? (
        <Button variant="contained" color="success" onClick={onSubmit}>
          Cadastrar Sala
        </Button>
      ) : (
        <>
          <Stack spacing={2}>
            <Alert variant="filled" severity="error">
              Limites de salas cadastradas atingido!
            </Alert>
            <Button variant="outlined" color="error" margin="normal">
              Máximo atingido
            </Button>
          </Stack>
        </>
      )}
    </div>
  );
};

export default AddSala;
