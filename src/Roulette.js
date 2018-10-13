import React, { Component } from 'react';


class Roulette extends Component{
    handleclick1 = () => {
        require('./Mystyles.css');
          }

    render(){
    return(
     <div><button className='roulette'onClick={this.handleclick1}></button></div>
    );
    }

}

export default Roulette;