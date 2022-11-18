import React, { Component } from 'react'
import '../styles/PkmnCard.css'

export default class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
            id: "",
            name: "",
            sprite: "#",
            typeA: "",
            typeB: ""
        }

    }
    

    
    
    fetchApi = async () => {
      //  let resp = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
        let data = await resp.json();
        try {
          this.setState({
            id: data.id,
            name: data.name,
            img: data.sprites.front_default,
            typeA: data.types[0].type.name,
            typeB: data.types[1].type.name
          })
        } catch (error) {
          this.setState({
            id: data.id,
            name: data.name,
            img: data.sprites.front_default,
            typeA: data.types[0].type.name
          })
        }       
        
       
    }

    handlerName = event => { 
       this.setState({
        name: event.target.value
       })
    }

    handlerSubmit = event => {
        event.preventDefault();
        this.fetchApi();
    }


  render() {
   // console.log(this.state.name)
    return (
      <body class='m-0 justify-content-center'>
        <div className='col-auto p-5 text-center'>
        <div className='wrapper'>
        <div className="card" >
          <div className="card-header text-black">
            Buscar Pokemon...
          </div>
          <div className="card-body">
                <form onSubmit={this.handlerSubmit}>
                    <input
                      type="text"
                      placeholder="Nombre de Pokemon"
                      value={this.state.name}
                      onChange={this.handlerName}
                    ></input>
                    <br/>
                    <button type='submit' className="btn btn-primary mt-2">Enviar</button>
                </form>
           
          </div>
         
        </div>
        
        
        <div className='card bg-ligth'>
                <div className='card-header text-white bg-dark'>id:{this.state.id} - {this.state.name}</div>
                <div className='card-body'>
                  <img src={this.state.img} alt="" />
                  <span><p className={this.state.typeA} >{this.state.typeA}</p><p className={this.state.typeB}>{this.state.typeB}</p></span>
                </div>
        </div>
  
        
      </div>
        </div>
      </body>
      
    )
  }
}