import React,{Component} from 'react';



class Vinrouge extends Component{
  constructor(props) {
    super(props);
       this.state = {
          items: [],
          isLoaded: false,
          x:false,
          y:false,
          z:false,
          initialStatex:{y:false,z:false},
          initialStatey:{x:false,z:false},
          initialStatez:{x:false,y:false}
        };

      }

    handleclick1 = () => {
      let random = Math.floor((Math.random() * 5) + 1)
      require('./Hidden.css');
      this.setState(this.state.initialStatex);
      this.setState({x:!this.state.x});
      fetch( `http://lcboapi.com/products?q=red+wine+chile&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[random], });});
        }

    handleclick2 = () => {
      let random = Math.floor((Math.random() * 5) + 1)
      require('./Hidden.css');
      this.setState(this.state.initialStatey);
      this.setState({y:!this.state.y});
      fetch( `http://lcboapi.com/products?q=red+wine+argentina&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[random],});});  }

    handleclick3 = () => {
      let random = Math.floor((Math.random() * 5) + 1)
      require('./Hidden.css');
      this.setState(this.state.initialStatez);
      this.setState({z:!this.state.z});
      fetch( `http://lcboapi.com/products?q=red+wine+france&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => { this.setState({isLoaded: true,items: json.result[random], });});  }

    handleclick4 = () => {
      let random = Math.floor((Math.random() * 5) + 1)
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+argentina+sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true, items: json.result[random], });});  }  

    handleclick5 = () => {
      let random = Math.floor((Math.random() * 5) + 1)
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+argentina+pinot_noir&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[random],});});  }    
             
    handleclick6 = () => {
      let random = Math.floor((Math.random() * 5) + 1)
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+argentina+malbec&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[random],});});  }    

    handleclick7 = () => {
      let random = Math.floor((Math.random() * 5) + 1)
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+france+sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[random],});});  }  

    handleclick8 = () => {
      let random = Math.floor((Math.random() * 5) + 1)
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+france+pinot_noir&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[random], });});  }    
                   
    handleclick9 = () => {
      let random = Math.floor((Math.random() * 5) + 1)
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+france+grenache&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[random], });});  }    
            
    handleclick10 = () => {
      let random = Math.floor((Math.random() * 5) + 1)
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+chile+sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[random],});});  }  
  
    handleclick11 = () => {
      let random = Math.floor((Math.random() * 5) + 1)
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+chile+pinot_noir&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[random], });});  }    
                     
    handleclick12 = () => {
      let random = Math.floor((Math.random() * 5) + 1)
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+chile+cabernet&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[random], });});  }    
              
    
render (){
  const { items } = this.state;
    console.log(this.state)
   if(this.state.z){
    return(
        <div>
            <button onClick={this.handleclick1}>Chilien</button>
            <button onClick={this.handleclick2}>Argentin</button>
            <button onClick={this.handleclick3}>France</button>
            <hr/>
            <button onClick={this.handleclick7} >Sauvignon</button>
            <button onClick={this.handleclick8}>Pinot Noir</button>
            <button onClick={this.handleclick9}>Grenache</button>
            <ul>
            
              <li><p>Vin numero : {items.id}</p><p> Domaine :  {items.name}</p>
              <p>Prix : {(items.price_in_cents/100).toFixed(2)} $</p> 
              <img src={items.image_url} alt=":("/>
              
              <hr/>
              <a href={"http://www.lcbo.com/lcbo/cherche?searchTerm="+items.id} >Acheter {items.name}</a>
              </li></ul>
        </div>
           );}
         
    else if (this.state.y){
    return (
      <div>
      <button onClick={this.handleclick1}>Chilien</button>
      <button onClick={this.handleclick2}>Argentin</button>
      <button onClick={this.handleclick3}>France</button>
      <hr/>
      <button onClick={this.handleclick4}>Sauvignon</button>
      <button onClick={this.handleclick5}>Pinot Noir</button>
      <button onClick={this.handleclick6}>Malbec</button>
            <ul>
            
              <li><p>Vin numero : {items.id}</p><p> Domaine :  {items.name}</p>
              <p>Prix : {(items.price_in_cents/100).toFixed(2)} $</p> 
              <img src={items.image_url} alt=":("/>
              
              <hr/>
              <a href={"http://www.lcbo.com/lcbo/cherche?searchTerm="+items.id} >Acheter {items.name}</a>
             </li> </ul>
        </div>

    );}
    else if (this.state.x){
      return (
        <div>
        <button onClick={this.handleclick1}>Chilien</button>
        <button onClick={this.handleclick2}>Argentin</button>
        <button onClick={this.handleclick3}>France</button>
        <hr/>
        <button onClick={this.handleclick10}>Sauvignon</button>
        <button onClick={this.handleclick11}>Pinot Noir</button>
        <button onClick={this.handleclick12}>Cabernet</button>
              <ul>
              <li><p>Vin numero : {items.id}</p><p> Domaine :  {items.name}</p>
              <p>Prix : {(items.price_in_cents/100).toFixed(2)} $</p> 
              <img src={items.image_url} alt=":("/>
              
              <hr/>
              <a href={"http://www.lcbo.com/lcbo/cherche?searchTerm="+items.id} >Acheter {items.name}</a>
              </li></ul>
        </div>
  
      );}
    
  else {
  return(<div>
         <button onClick={this.handleclick1}>Chilien</button>
         <button onClick={this.handleclick2}>Argentin</button>
         <button onClick={this.handleclick3}>France</button>
         </div>
         );
    }
        }         
                                   }
                
  

          
                
           


export default Vinrouge;