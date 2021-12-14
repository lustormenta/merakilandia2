import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Listitems from './components/Listitems/Listitems';
import ContainerItemDetail from './components/ContainerItemDetail/ContainerItemDetail';

function App() {

  //JSX
  return ( 
  <div className = "App" >
    <NavBar />
    <Listitems />
    <ContainerItemDetail />
    </div>
  );
}

export default App;