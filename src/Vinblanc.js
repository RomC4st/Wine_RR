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
            this.setState(this.state.initialStatex);
            this.setState({a:!this.state.a});
            fetch( `http://lcboapi.com/products?q=white+wine+soft+bottle&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
            .then(res => res.json())
            .then((json) => {this.setState({isLoaded: true,items: json.result });});  }
      
          handleclick2 = () => {
            this.setState(this.state.initialStatey);
            this.setState({b:!this.state.b});
            fetch( `http://lcboapi.com/products?q=white+wine+dry+bottle&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
            .then(res => res.json())
            .then((json) => {this.setState({isLoaded: true,items: json.result});});  }
      
          handleclick3 = () => {
            this.setState(this.state.initialStatez);
            this.setState({c:!this.state.c});
            fetch( `http://lcboapi.com/products?q=white+wine+extra_dry+bottle&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
            .then(res => res.json())
            .then((json) => { this.setState({isLoaded: true,items: json.result });});  }   

            handleclick4 = () => {
                fetch( `http://lcboapi.com/products?q=white+wine+sweet+riesling&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
                .then(res => res.json())
                .then((json) => {this.setState({isLoaded: true, items: json.result });});  }  
          
              handleclick5 = () => {
                fetch( `http://lcboapi.com/products?q=white+wine+dry+sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
                .then(res => res.json())
                .then((json) => {this.setState({isLoaded: true,items: json.result});});  }    
                       
              handleclick6 = () => {
                fetch( `http://lcboapi.com/products?q=white+wine+dry+canada&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
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
            {items.map((e, i) => (
              <li><p>Vin numero : {i+1}</p><p> Domaine :  {e.name}</p>
              <p>Prix : {(e.price_in_cents/100).toFixed(2)} $</p> 
              <img src={e.image_url} alt=":("/>
              </li>))} 
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
            {items.map((e, i) => (
              <li><p>Vin numero : {i+1}</p><p> Domaine :  {e.name}</p>
              <p>Prix : {(e.price_in_cents/100).toFixed(2)} $</p> 
              <img src={e.image_url} alt=":("/>
              </li>))} 
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
         <button onClick={this.handleclick1}>Moelleux</button>
         <button onClick={this.handleclick2}>Demi-sec</button>
         <button onClick={this.handleclick3}>Sec</button>
         </div>
         );
    }
        }         
                                   }
                
  

           


export default Vinblanc;