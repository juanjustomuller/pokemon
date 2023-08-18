import './App.css';
import { Route, useLocation } from 'react-router-dom';
import  Home from "./views/Home/Home";
import Landing from './views/Landing/Landing';
import Detail from './views/Details/Detail';
import Form from './views/Form/Form';
import NavBar from './components/NavBar/NavBar';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path= "/" component={Landing}/>
      <Route exact path= "/home" component={Home}/>
      <Route path= "/detail/:id" component={Detail}/>
      <Route exact path= "/create" component={Form}/>
      
    </div>
  );
}

export default App;
