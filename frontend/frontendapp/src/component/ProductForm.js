import React, { Component } from 'react'

export default class ProductForm extends Component {

  render() {
    console.log(this.props.product)
    return (
      <div className="col-3">
        <div className="container border border-success">
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.props.handleSubmit}>
            <h1><b>Thêm mới sản phẩm</b></h1>
              <div className="form-group">
                <label>Nhập tên sản phẩm</label>
                <input type="text" name="product_name" id="product_name" className="form-control" placeholder="tên sản phẩm" aria-describedby="helpId" value={this.props.product.product_name} onChange={this.props.handleChange}/>
                <small id="helpId" className="text-muted">điền tên sản phẩm</small>
              </div>
              <div className="form-group">
                <label>Nhập giá sản phẩm</label>
                <input type="number" name="product_price" id="product_price" className="form-control" placeholder="giá sản phẩm" aria-describedby="helpId" value={this.props.product.product_price} onChange={this.props.handleChange}/>
                <small id="helpId" className="text-muted">điền giá sản phẩm</small>
              </div>
              <div className="form-group">
                <label>Nhập hình ảnh sản phẩm</label>
                <input type="text" name="image" id="image" className="form-control" placeholder="hình ảnh" aria-describedby="helpId" value={this.props.product.image} onChange={this.props.handleChange}/>
                <small id="helpId" className="text-muted">nhập hình ảnh</small>
              </div>
              <button type="submit" className="btn btn-info">Submit</button>
            </form></div>
        </div>
      </div>
      </div>
    )
  }
}
