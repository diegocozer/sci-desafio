import {
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import vinculoApi from "../api/vinculoApi";
import pessoasApi from "../api/pessoasApi";
import api from "../api/api";

const Buscar = () => {
  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState();
  const [filtro, setFiltro] = useState([]);
  const [lotacaoReuniao, setLotacaoReuniao] = useState(0);
  const [lotacaoCafe, setLotacaoCafe] = useState(0);
  const [salaApi, setSalaApi] = useState([]);

  //quando reiniciar chama a api

  useEffect(() => {
    recarregar();
    setFiltro([...pessoas]);
    api.get("/").then((res) => setSalaApi(res.data));
  }, [busca]);

  //faz a busca, sei que deve ter alguma forma melhor de fazer, mas estou pronto para aprender

  const pesquisar = () => {
    pessoas.filter((pessoa, i) =>
      pessoa["pessoa"] === busca ? setFiltro([pessoa]) : ""
    );
    pessoas.filter((pessoa, i) =>
      pessoa["salaReuniao"] === busca ? setFiltro([pessoa]) : ""
    );
    pessoas.filter((pessoa, i) =>
      pessoa["salaCafe"] === busca ? setFiltro([pessoa]) : ""
    );
    setLoading(true);
  };

  //recarrega a pagina
  const recarregar = () => {
    vinculoApi.get("/").then((res) => setPessoas(res.data));
  };

  //deleta os itens
  const onDelete = (id) => {
    vinculoApi.delete(`/${id}/`).then((res) => recarregar());
  };

  return (
    <div>
      <InputBase
        sx={{ ml: 10, flex: 1 }}
        placeholder="Buscar"
        inputProps={{ "aria-label": "Buscar" }}
        onChange={(e) => setBusca(e.target.value)}
      />
      <IconButton
        onClick={pesquisar}
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>Pessoas Vinculadas</caption>
          <TableHead>
            <TableRow>
              <TableCell align="center">Pessoas</TableCell>
              <TableCell align="center">Sala de Reunião</TableCell>
              <TableCell align="center">Sala de Café</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? filtro.map((data) => (
                  <TableRow key={data.id}>
                    <TableCell align="center">{data.pessoa}</TableCell>
                    <TableCell align="center">{data.salaReuniao}</TableCell>
                    <TableCell align="center">{data.salaCafe}</TableCell>
                    <TableCell align="center">
                      <Stack direction="column" spacing={1} key={data.id}>
                        <Button
                          key={data.id}
                          variant="outlined"
                          color="error"
                          onClick={() => onDelete(data.id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))
              : pessoas.map((data) => (
                  <TableRow key={data.id}>
                    <TableCell align="center">{data.salaReuniao}</TableCell>
                    <TableCell align="center">{data.salaCafe}</TableCell>
                    <TableCell align="center">{data.pessoa}</TableCell>
                    <TableCell align="center">
                      <Stack direction="column" spacing={1} key={data.id}>
                        <Button
                          key={data.id}
                          variant="outlined"
                          color="error"
                          onClick={() => onDelete(data.id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Buscar;
