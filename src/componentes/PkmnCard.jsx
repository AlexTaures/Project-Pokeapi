import React, { Component } from 'react'
import '../styles/PkmnCard.css'

export default class PkmnCard extends Component {
 
  
  

  render() {
    if(this.props.typeA==='' && this.props.typeB===''){
        return (
          <div >
           <div className='card mt-4 bg-light'>
                <div className='card-header text-white bg-dark'>id:{this.props.data.id} - {this.props.data.name}</div>
                <div>
                  <div className='card-body'>
                  <img src={this.props.data.sprite} alt="Imagen no disponible" width='150px' height='150px' />
                  </div>
                 
                  <div className='types'><div className={this.props.data.typeA} ></div><div className={this.props.data.typeB}></div></div>
                </div>
            </div>
          </div>
          
        )
      }else if(this.props.typeA===this.props.data.typeA && this.props.typeB==='' ){
        return (
          <div >
           <div className='card mt-4 bg-light'>
                <div className='card-header text-white bg-dark'>id:{this.props.data.id} - {this.props.data.name}</div>
                <div>
                  <div className='card-body'>
                  <img src={this.props.data.sprite} alt="Imagen no disponible" width='150px' height='150px' />
                  </div>
                 
                  <div className='types'><div className={this.props.data.typeA} ></div><div className={this.props.data.typeB}></div></div>
                </div>
            </div>
          </div>
          
        )
      }else if(this.props.typeA===this.props.data.typeA && this.props.typeB===this.props.data.typeB)
      return (
        <div >
           <div className='card mt-4 bg-light'>
                <div className='card-header text-white bg-dark'>id:{this.props.data.id} - {this.props.data.name}</div>
                <div>
                  <div className='card-body'>
                  <img src={this.props.data.sprite} alt="Imagen no disponible" width='150px' height='150px' />
                  </div>
                 
                  <div className='types'><div className={this.props.data.typeA} ></div><div className={this.props.data.typeB}></div></div>
                </div>
            </div>
          </div>
        
      )


    }
  }
