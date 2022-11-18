import React, { Component } from 'react'
import '../styles/PkmnCard.css'

export default class PkmnCard extends Component {
  constructor(props){
    super(props);
  }
  

  render() {
    if(this.props.typeA==='' && this.props.typeB===''){
        return (
          <div >
           <div className='card mt-4 bg-light'>
                <div className='card-header text-white bg-dark'>id:{this.props.data.id} - {this.props.data.name}</div>
                <div className='card-body'>
                  <img src={this.props.data.sprite} alt="" />
                  <span><p className={this.props.data.typeA} >{this.props.data.typeA}</p><p className={this.props.data.typeB}>{this.props.data.typeB}</p></span>
                </div>
            </div>
          </div>
          
        )
      }else if(this.props.typeA===this.props.data.typeA && this.props.typeB==='' ){
        return (
          <div >
           <div className='card mt-4 bg-ligth'>
                <div className='card-header text-white bg-dark'>id:{this.props.data.id} - {this.props.data.name}</div>
                <div className='card-body'>
                  <img src={this.props.data.sprite} alt="" />
                  <span><p className={this.props.data.typeA} >{this.props.data.typeA}</p><p className={this.props.data.typeB}>{this.props.data.typeB}</p></span>
                </div>
            </div>
          </div>
          
        )
      }else if(this.props.typeA===this.props.data.typeA && this.props.typeB===this.props.data.typeB)
      return (
        <div className={this.props.data.typeA}>
         <div className='card mt-4 bg-light'>
              <div className='card-header text-white bg-dark'>id:{this.props.data.id} - {this.props.data.name}</div>
              <div className='card-body'>
                <img src={this.props.data.sprite} alt="" />
                <span><p className={this.props.data.typeA} >{this.props.data.typeA}</p><p className={this.props.data.typeB}>{this.props.data.typeB}</p></span>
              </div>
          </div>
        </div>
        
      )


    }
  }
