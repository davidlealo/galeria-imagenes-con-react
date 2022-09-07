import './App.css';
import CardProject from './components/CardProject';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from "react-bootstrap/Button";


function App() {
  return (
    <>
    <Header titulo="Galería de Imágenes con React"></Header>
    <CardProject></CardProject>
    <Footer text="Todos los derechos reservados"></Footer>
     

</>
  );
}

export default App;
