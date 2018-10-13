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
      
      require('./Hidden.css');
      this.setState(this.state.initialStatex);
      this.setState({x:!this.state.x});
      fetch( `http://lcboapi.com/products?q=red+wine+chile&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[0], });});
        }

    handleclick2 = () => {
      require('./Hidden.css');
      this.setState(this.state.initialStatey);
      this.setState({y:!this.state.y});
      fetch( `http://lcboapi.com/products?q=red+wine+argentina&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[0],});});  }

    handleclick3 = () => {
      require('./Hidden.css');
      this.setState(this.state.initialStatez);
      this.setState({z:!this.state.z});
      fetch( `http://lcboapi.com/products?q=red+wine+france&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => { this.setState({isLoaded: true,items: json.result[0], });});  }

    handleclick4 = () => {
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+argentina+sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true, items: json.result[0], });});  }  

    handleclick5 = () => {
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+argentina+pinot_noir&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[0],});});  }    
             
    handleclick6 = () => {
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+argentina+malbec&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[0],});});  }    

    handleclick7 = () => {
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+france+sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[0],});});  }  

    handleclick8 = () => {
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+france+pinot_noir&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[0], });});  }    
                   
    handleclick9 = () => {
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+france+grenache&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[0], });});  }    
            
    handleclick10 = () => {
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+chile+sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[0],});});  }  
  
    handleclick11 = () => {
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+chile+pinot_noir&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[0], });});  }    
                     
    handleclick12 = () => {
      require('./Hidden.css');
      fetch( `http://lcboapi.com/products?q=red+wine+chile+cabernet&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result[0], });});  }    
              
    
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
            
              <li><p>Vin numero : {1}</p><p> Domaine :  {items.name}</p>
              <p>Prix : {(items.price_in_cents/100).toFixed(2)} $</p> 
              <img src={items.image_url} alt=":("/>
              </li>
              </ul>
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
            
              <li><p>Vin numero : {1}</p><p> Domaine :  {items.name}</p>
              <p>Prix : {(items.price_in_cents/100).toFixed(2)} $</p> 
              <img src={items.image_url} alt=":("/>
              </li>
              </ul>
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
              <li><p>Vin numero : {1}</p><p> Domaine :  {items.name}</p>
              <p>Prix : {(items.price_in_cents/100).toFixed(2)} $</p> 
              <img src={items.image_url} alt=":("/>
              </li>
              </ul>
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