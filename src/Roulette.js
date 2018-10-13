import React, { Component } from 'react';




class Roulette extends Component{
    
    constructor(props) {
    super(props);
       this.state = {
         X:false,
        };

      }
    handleclick1 = () => {
        this.setState({X:!this.state.X});
        require('./Mystyles.css');
          }
    handleclick2 =() =>{
        this.setState({X:!this.state.X});
        window.location.reload()
        
    }

    render(){
   console.log(this.state.X)
   if(this.state.X){
    return(
     <div><button className='roulette'onClick={this.handleclick2}></button></div>
    );
    
}
   else{
    return(
        <div><button className='roulette'onClick={this.handleclick1}></button></div>

    )}; }

}

export default Roulette;