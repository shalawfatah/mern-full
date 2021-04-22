import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Directors from './components/Directors';
import SingleMovie from './components/SingleMovie';
import Director from './components/Director';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />  
        </Route>
        <Route path='/movies' exact>
          <Movies />  
        </Route>
        <Route path='/directors' exact>
          <Directors />  
        </Route>
        <Route path='/movies/:title' exact>
          <SingleMovie />  
        </Route>
        <Route path='/directors/:name' exact>
          <Director />  
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
