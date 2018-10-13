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
      this.setState(this.state.initialStatex);
      this.setState({x:!this.state.x});
      
      fetch( `http://lcboapi.com/products?q=red+wine+chile&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result });});
        }

    handleclick2 = () => {
      this.setState(this.state.initialStatey);
      this.setState({y:!this.state.y});
      fetch( `http://lcboapi.com/products?q=red+wine+argentina&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result});});  }

    handleclick3 = () => {
      this.setState(this.state.initialStatez);
      this.setState({z:!this.state.z});
      fetch( `http://lcboapi.com/products?q=red+wine+france&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => { this.setState({isLoaded: true,items: json.result });});  }

    handleclick4 = () => {
      
      fetch( `http://lcboapi.com/products?q=red+wine+argentina+sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true, items: json.result });});  }  

    handleclick5 = () => {
      fetch( `http://lcboapi.com/products?q=red+wine+argentina+pinot_noir&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result});});  }    
             
    handleclick6 = () => {
      fetch( `http://lcboapi.com/products?q=red+wine+argentina+malbec&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result});});  }    

    handleclick7 = () => {
      fetch( `http://lcboapi.com/products?q=red+wine+france+sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result});});  }  

    handleclick8 = () => {
      fetch( `http://lcboapi.com/products?q=red+wine+france+pinot_noir&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result });});  }    
                   
    handleclick9 = () => {
      fetch( `http://lcboapi.com/products?q=red+wine+france+grenache&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result });});  }    
            
    handleclick10 = () => {
      fetch( `http://lcboapi.com/products?q=red+wine+chile+sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result});});  }  
  
    handleclick11 = () => {
      fetch( `http://lcboapi.com/products?q=red+wine+chile+pinot_noir&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result });});  }    
                     
    handleclick12 = () => {
      fetch( `http://lcboapi.com/products?q=red+wine+chile+cabernet&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
      .then(res => res.json())
      .then((json) => {this.setState({isLoaded: true,items: json.result });});  }    
              
    
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
            {items.map((e, i) => (
              <li><p>Vin numero : {i+1}</p><p> Domaine :  {e.name}</p>
              <p>Prix : {(e.price_in_cents/100).toFixed(2)} $</p> 
              <img src={e.image_url} alt=":("/>
              </li>))} 
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
            {items.map((e, i) => (
              <li><p>Vin numero : {i+1}</p><p> Domaine :  {e.name}</p>
              <p>Prix : {(e.price_in_cents/100).toFixed(2)} $</p> 
              <img src={e.image_url} alt=":("/>
              </li>))} 
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
            {items.map((e, i) => (
              <li><p>Vin numero : {i+1}</p><p> Domaine :  {e.name}</p>
              <p>Prix : {(e.price_in_cents/100).toFixed(2)} $</p> 
              <img src={e.image_url} alt=":("/>
              </li>))} 
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