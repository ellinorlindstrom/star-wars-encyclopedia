import "./styles/App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AppNavbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import Films from "./pages/Films";
import FilmDetail from "./pages/FilmDetails";
import HomePage from "./pages/HomePage";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";
import "bootstrap/dist/css/bootstrap.min.css";
import PeopleDetails from "./pages/PeopleDetails";
import PlanetDetails from "./pages/PlanetDetails";
import SpeciesDetails from "./pages/SpeciesDetails";
import StarshipDetails from "./pages/StarshipsDetails";
import VehicleDetails from "./pages/VehiclesDetails";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/startpage" element={<HomePage />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<FilmDetail />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PeopleDetails />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<PlanetDetails />} />
          <Route path="/species" element={<Species />} />
          <Route path="/species/:id" element={<SpeciesDetails />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starship/:id" element={<StarshipDetails />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicle/:id" element={<VehicleDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
