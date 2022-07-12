import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddSala from "./AddSala";
import NavBar from "./components/NavBar";
import AppRouter from "./router";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
