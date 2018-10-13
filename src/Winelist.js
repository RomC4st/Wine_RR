import React, { Component } from 'react';
import "./Winelist.css";





class Winelist extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoaded: false,
      items: [],
      
    };
    
  }
   
  
  componentDidMount() {
   
        fetch( `http://lcboapi.com/products?q=${this.props.match.params.type}+wine+bottle&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
       .then(res => res.json())
       .then((json) => {
        this.setState({
        isLoaded: true,
        items: json.result[0],
           });
        });
       
  
    }
     
  
  

  render() {

    const { items } = this.state;
    
    //const itemsredalcohol = itemsred.filter((item,id) => item.alcohol_content === 1300)
    //const filter = items.filter((items) => items.origin ==="Chile, Region Not Specified");

  
      return (

      	<div> 
        	
        <ul className ='Api'>
          
            <li><p>Vin numero : {1}</p><p> Domaine : </p>
            <p>Prix : {(items.price_in_cents/100).toFixed(2)} $</p> 
            <img src={items.image_url} alt=":("/>
            </li>
        </ul>




        </div>


      );
    }
 
  }



export default Winelist;




