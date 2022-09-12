import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS
import Header from './components/Header';
import Badge from 'react-bootstrap/Badge';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header titulo="Galería de Imágenes con React"></Header>
    <main>
    <Cards image="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" title="Atardecer anaranjado" text="Esta es la imagen de un atardecer que encontré en Unsplash"></Cards>
    <Cards image="https://images.unsplash.com/photo-1588001832198-c15cff59b078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" tille="Atardecer con tonos rosas" text="Esta es otra foto de Unspalsh con otro atardecer más con colores rosas sumados al anaranjado"></Cards>
    <Cards image="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" title="Atardecer tan bello que parece irreal" text="Este es un atardecer tan bello con distintas tonalidades entre el azul al rojo. Incluso parece falso de lo impactante que es"></Cards>
    <Cards image="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" title="Atardecer con árboles" text="Este es un atardecer que muestra un lugar con unos árboles"></Cards>
    <Cards image="https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80" title="Atardecer en lago" text="Atardecer en un lago"></Cards>
    </main>
    <Footer text="Galería de imágenes © Todos los derechos reservados"></Footer>
    </>
  );
}

export default App;