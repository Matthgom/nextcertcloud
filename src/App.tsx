
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trilhas from './pages/Trilhas';
import ModuloDetalhe from './pages/ModuloDetalhe';

function App() {
  return (
    <Router basename="/nextcertcloud">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trilhas" element={<Trilhas />} />
        <Route path="/modulo" element={<ModuloDetalhe />} />
      </Routes>
    </Router>
  );
}

export default App;
