import React, { Component } from 'react'

export default class Container extends Component {
  render() {
    return (
     
        <div className="col-2">
 <div className="card">
    <img className="img-thumbnail height:300px" src={this.props.image}  />
    <div className="card-body">
  
    <div>
      <h5 className="card-title float-left">{this.props.product_name}</h5>
      <h5 className="card-text float-right">{this.props.product_price}</h5>
      </div>
      </div>
    <div>
       <button  className="btn btn-warning float-left" onClick={()=>this.props.handleClickEdit(this.props.id)}>Edit</button>
       <button  className="btn btn-danger float-right"  onClick={()=>this.props.handleDelete(this.props.id)}>Delete</button>
       <button  className="btn btn-success float-right"  onClick={()=>this.props.addToCart(this.props.id)}>Add to cart</button>
       </div>
      
  </div> 
</div>

    )
  }
}
