import React, { Component } from 'react';

import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Winelist from "./Winelist";
import './App.css';
import Vinrouge from './Vinrouge';
import Vinblanc from './Vinblanc';
import Roulette from './Roulette';


  
class App extends Component {
  
  render() {
 
    return (

            
            <div className="App">

        <header className="App-header">

          
           
        
        <BrowserRouter>
          <div>
            <Roulette />
            
            <NavLink exact to="/red-Wine-Selection" >Rouge</NavLink >
            <NavLink to="/white-Wine-Selection"> Blanc </NavLink>
            <NavLink to="/pink-Wine-Selection"> Rosé </NavLink>
            <NavLink to="/bubble-Wine-Selection"> Petillant </NavLink>

            <Switch>
              <Route path="/white-Wine-Selection" component={Vinblanc} />
              <Route path="/red-Wine-Selection" component={Vinrouge} />
            </Switch>


            <Switch>
              <Route exact path="/:type-wine-selection" render={ (props) =><Winelist key={props.match.params.type} {...props}/>}/>
            </Switch>



          </div>
        </BrowserRouter>
        
       </header>
      </div>
    );
  }
}

export default App;
