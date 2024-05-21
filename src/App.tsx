import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import Films from "./pages/Films";
//import FilmDetail from "./pages/FilmDetail";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Container className="mt-4">
      <Routes>
      <Route path="/" element={<Navigate to="/films" />} />
      <Route path="/films" element={<Films />} />
{/*       <Route path="/films/:filmid" element={<FilmDetail />} />
 */}        <Route path="/people" element={<People/>} />
        <Route path="/planets" element={<Planets/>} />
        <Route path="/species" element={<Species/>} />
        <Route path="/starships" element={<Starships/>} />
        <Route path="/vehicles" element={<Vehicles/>} />
      </Routes>
      </Container>
    </Router>
  )
}

export default App
