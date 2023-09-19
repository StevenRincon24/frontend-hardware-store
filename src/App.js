import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./Routes/Routes";


import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
