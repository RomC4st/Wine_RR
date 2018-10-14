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
   
    ;
    

  
  componentDidMount() {
        let random = Math.floor((Math.random() * 5) + 1)
        fetch( `http://lcboapi.com/products?q=${this.props.match.params.type}+wine+bottle&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
       .then(res => res.json())
       .then((json) => {
        this.setState({
        isLoaded: true,
        items: json.result[random],
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
          
            <li><p>Vin numero : {items.id}</p><p> Domaine : </p>
            <p>Prix : {(items.price_in_cents/100).toFixed(2)} $</p> 
            <img src={items.image_url} alt=":("/>
            <hr/>
            <a href={"http://www.lcbo.com/lcbo/cherche?searchTerm="+items.id} >Acheter {items.name}</a>
            </li>
        </ul>
        



        </div>


      );
    }
 
  }



export default Winelist;




