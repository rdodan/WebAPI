import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import {Home} from './components/Home';
import {Veggies} from './components/Veggies';
import {Navigation} from './components/Navigation';
import {History} from './components/History';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navlink} from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className = "container"> 
        <h5 className= "mt-5 d-flex justify-content-md-center"> This is my project!</h5>
        <Navigation/>
        <Switch> // changing the url, will change the page 
          <Route path ='/' component ={Home} exact />
          <Route path ='/veggies' component = {Veggies} />
          <Route path ='/history' component = {History} />
        </Switch>
      </div>
    </BrowserRouter>
   
  );
}
 
export default App;
