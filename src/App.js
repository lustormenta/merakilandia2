import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Listitems from './components/Listitems/Listitems';

function App() {

  //JSX
  return ( 
  <div className = "App" >
    <NavBar />
    <Listitems />
    </div>
  );
}

export default App;