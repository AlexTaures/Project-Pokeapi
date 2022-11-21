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
            typeB: "",
            show: 0,
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
            img: data.sprites.other['official-artwork'].front_default,
            typeA: data.types[0].type.name,
            typeB: data.types[1].type.name,
            show: 1
          })
        } catch (error) {
          this.setState({
            id: data.id,
            name: data.name,
            img: data.sprites.other['official-artwork'].front_default,
            typeA: data.types[0].type.name,
            show: 1
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

    release = () => {
      this.setState({
        name: '',
        show:0
      });
      //console.log(this.state.show)
    }

  render() {
   // console.log(this.state.name)

   if(this.state.show===0){
    return (
      <div className='d-inline-block py-5'>
      
        <div id='card-search' className="card" >
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
      </div> 
    )
   }else{
    return (
      <div>
          <div className='py-2 d-flex justify-content-center' >
           <div className='card bg-light'>
                <div className='card-header text-white bg-dark'>id:{this.state.id} - {this.state.name}</div>
                <div>
                  <div className='card-body'>
                  <img src={this.state.img} alt="Imagen no disponible" width='150px' height='150px' />
                  </div>
                 
                  <div className='types'><div className={this.state.typeA} ></div><div className={this.state.typeB}></div></div>
                </div>
            </div>
      </div>
      <form onSubmit={this.release}>
                    <button type='submit' className="btn btn-primary mt-2">Volver</button>
                </form>
      </div>
      
    )
   }
    
  }
}