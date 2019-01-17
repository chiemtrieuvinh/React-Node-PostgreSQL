import React, { Component } from 'react'

export default class Cart extends Component {
  render() {

    const listItems = this.props.cartlist.map((value,key) =>
    <ul  key={value.id}>
        <li>
            {value.id}
    {value.product_name} {" "}
    {value.product_price}
    <button  className="btn btn-danger float-right" onClick={function(event){
        event.preventDefault()
        this.props.handleDeleteCart1(value.id)}.bind(this)}>Delete</button>
  </li>
  </ul>
  );
    return (
      <div className="card border-primary">
        <img className="card-img-top" src="holder.js/100px180/" alt=""/>
        <div className="card-body">
          <h4 className="card-title">Cart</h4>
          {listItems}
         
        </div>
      </div>
    )
  }
}
