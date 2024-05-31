
import './App.css'
import { Route, Routes } from "react-router-dom";
import Navegacion from "./components/Navbar";
import Home from './views/Home';
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";

function App() {

  return (
    <>
      <Navegacion />
      <Routes>
<Route
path="/"
element={<Home />}
/>
<Route
path="/contacto"
element={<Contacto />}
/>
<Route
path="*"
element={<NotFound />}
/>

</Routes>
    </>
  )
}

export default App
