import React,{Component} from 'react';

class Vinblanc extends Component{
    constructor(props) {
        super(props);
           this.state = {
              items: [],
              isLoaded: false,
              a:false,
              b:false,
              c:false,
              initialStatex:{b:false,c:false},
              initialStatey:{a:false,c:false},
              initialStatez:{a:false,b:false},
            };
    
          }
          handleclick1 = () => {
            require('./Hidden.css');
            this.setState(this.state.initialStatex);
            this.setState({a:!this.state.a});
            fetch( `http://lcboapi.com/products?q=white+wine+sweet&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
            .then(res => res.json())
            .then((json) => {this.setState({isLoaded: true,items: json.result[0], });});  }
      
          handleclick2 = () => {
            require('./Hidden.css');
            this.setState(this.state.initialStatey);
            this.setState({b:!this.state.b});
            fetch( `http://lcboapi.com/products?q=white+wine+dry+bottle&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
            .then(res => res.json())
            .then((json) => {this.setState({isLoaded: true,items: json.result[0],});});  }
      
          handleclick3 = () => {
            require('./Hidden.css');
            this.setState(this.state.initialStatez);
            this.setState({c:!this.state.c});
            fetch( `http://lcboapi.com/products?q=white+wine+extra_dry+bottle&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
            .then(res => res.json())
            .then((json) => { this.setState({isLoaded: true,items: json.result[0], });});  }   

            handleclick4 = () => {
                require('./Hidden.css');
                fetch( `http://lcboapi.com/products?q=white+wine+sweet+riesling&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
                .then(res => res.json())
                .then((json) => {this.setState({isLoaded: true, items: json.result[0],});});  }  
          
              handleclick5 = () => {
                require('./Hidden.css');
                fetch( `http://lcboapi.com/products?q=white+wine+dry+sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
                .then(res => res.json())
                .then((json) => {this.setState({isLoaded: true,items: json.result[0],});});  }    
                       
              handleclick6 = () => {
                require('./Hidden.css');
                fetch( `http://lcboapi.com/products?q=white+wine+dry+canada&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
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
                fetch( `http://lcboapi.com/products?q=white+wine+sweet+riesling&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
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
   if(this.state.c){
    return(
        <div>
            <button onClick={this.handleclick1}>Moelleux</button>
            <button onClick={this.handleclick2}>Demi-sec</button>
            <button onClick={this.handleclick3}>Sec</button>
            <hr/>
            <button onClick={this.handleclick5} >Sauvignon</button>
            <button onClick={this.handleclick6}>Canada</button>
            
            <ul>
            <li><p>Vin numero : {1}</p><p> Domaine :  {items.name}</p>
              <p>Prix : {(items.price_in_cents/100).toFixed(2)} $</p> 
              <img src={items.image_url} alt=":("/>
              </li>
              </ul>
        </div>
           );}
         
    else if (this.state.b){
    return (
      <div>
      <button onClick={this.handleclick1}>Moelleux</button>
      <button onClick={this.handleclick2}>Demi-sec</button>
      <button onClick={this.handleclick3}>Sec</button>
      
            <ul>
            <li><p>Vin numero : {1}</p><p> Domaine :  {items.name}</p>
              <p>Prix : {(items.price_in_cents/100).toFixed(2)} $</p> 
              <img src={items.image_url} alt=":("/>
              </li>
              </ul>
        </div>

    );}
    else if (this.state.a){
      return (
        <div>
        <button onClick={this.handleclick1}>Moelleux</button>
        <button onClick={this.handleclick2}>Demi-sec</button>
        <button onClick={this.handleclick3}>Sec</button>
        <hr/>
        <button onClick={this.handleclick10}>Riesling</button>
       
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
         <button onClick={this.handleclick1}>Moelleux</button>
         <button onClick={this.handleclick2}>Demi-sec</button>
         <button onClick={this.handleclick3}>Sec</button>
         </div>
         );
    }
        }         
                                   }
                
  

           


export default Vinblanc;