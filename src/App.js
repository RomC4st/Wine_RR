import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Winelist from "./Winelist";
import './App.css';
import Vinrouge from './Vinrouge';
import Vinblanc from './Vinblanc';
import Roulette from './Roulette';




  
class App extends Component {

  state={
    x:true
  }

  handleclick2 =() =>{
    this.setState({X:!this.state.X});
    window.location.reload()
    window.location.href='./'
    
}
  render() {
    
    return (

            
      <div className="App">

        <header className="App-header">
       
       
          <Roulette />
           
        
        <BrowserRouter>
          <div>
            
            
            
            <NavLink exact to="/red-Wine-Selection" >Rouge</NavLink >
            <NavLink to="/white-Wine-Selection"> Blanc </NavLink>
            <NavLink to="/pink-Wine-Selection"> Rosé </NavLink>
            <NavLink to="/bubble-Wine-Selection"> Petillant </NavLink>
            <button className='Reset'onClick={this.handleclick2}>Reset</button>
            <Switch>
              <Route path="/white-Wine-Selection" component={Vinblanc} />
              <Route path="/red-Wine-Selection" component={Vinrouge} />
              <Route path="/"/>
            </Switch>
            

            <Switch>
              <Route exact path="/:type-wine-selection" render={ (props) =><Winelist key={props.match.params.type} {...props}/>}/>/>} />
            </Switch>



          </div>
        </BrowserRouter>
        
       </header>

      </div>
    );
  }
}

export default App;
