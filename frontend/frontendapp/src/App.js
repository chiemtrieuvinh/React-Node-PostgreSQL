import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Container from './component/Container'
import axios from 'axios'
import ProductForm from './component/ProductForm';
import ProductionUpdate from './component/ProductionUpdate';
import Cart from './component/Cart'
// const getProductData = () =>{
//   return axios.get('http://localhost:4000/data').then((res) => res.data)
// }

class App extends Component {
  constructor(props){
    super(props)
      this.state= {
        product : {
          product_name: '',
          product_price: 0,
          image: ''
        },
        db: [],
        isFormShow: false,
        isUpdateShow: false,
        cart: [],
        tongtien: 0,
        tienthem: 0
    }
    this.handleContainer = this.handleContainer.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClickEdit = this.handleClickEdit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleClickForm = this.handleClickForm.bind(this)
    this.handleUpdateForm = this.handleUpdateForm.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.handleDeleteCart = this.handleDeleteCart.bind(this)
  }
  handleDeleteCart(id){
    // console.log(id)
    const test = this.state.cart.filter((item,key) => item.id !== id)
   this.setState({
     cart : test
   })
}
  addToCart(id){
    const idcart = this.state.db.find((item)=> item.id === id)
    
    console.log('ket noi thanh cong')
   console.log(idcart)
    this.setState({
      cart : [].concat(this.state.cart,idcart),
      tienthem: idcart,
      tongtien: this.state.tongtien + 1
    })
    console.log(this.state.tongtien)
    console.log(this.state.tienthem.product_price)
  }

  handleClickEdit(id){
    const getid = this.state.db.find((item)=> item.id === id)
    console.log(getid)
    console.log('ket noi thanh cong')
    this.setState({
      product : getid,
      isUpdateShow: !this.state.isUpdateShow
    })
  }


  ///ham update
  handleUpdate(event){
    event.preventDefault();
    console.log('ket noi thanh cong')
   
    const product_name= this.state.product.product_name
    const product_price= this.state.product.product_price
    const image= this.state.product.image
    const id = this.state.product.id
    axios.post('/updateproduct',{product_name,product_price,image,id})
  .then(res => console.log(res.data))
  .catch((err) => {
    console.log(err);
  })
  this.setState({
    product : {
      product_name: '',
      product_price: 0,
      image: ''
    }
  })
    // this.setState({
    //   db: this.state.db.map((item)=> { 
    //     if(item.id !== this.state.product.id){
    //       return item
    //   }else{
    //     return {
    //       id: this.state.product.id,
    //       product_name: this.state.product.product_name,
    //       product_price: this.state.product.product_price,
    //       product_image: this.state.product.product_image
    //     }
    //   }
    // }
    //  )
    // })
  }
  ///delete
  handleDelete(id){
    axios.post('/deleteproduct',{id}).then(res=>console.log(res.data)).catch((err)=>{console.log(err)})
    console.log('ket noi thanh cong' + id)

  }
  /// ham submit
  handleSubmit(event){
    event.preventDefault();
    console.log('da nhan duoc' )
    const product_name= this.state.product.product_name
    const product_price= this.state.product.product_price
    const image= this.state.product.image
    
    


    axios.post(`/postproduct`, { product_name,product_price,image })
      .then(res => res.data
      )
        this.setState({
          product : {
            product_name: '',
            product_price: 0,
            image: ''
          }
        })

  }

  handleChange(event){
    event.preventDefault();
    this.setState(({
      product: Object.assign({},this.state.product,{
        [event.target.name] : event.target.value
      })
    }))
  }
  componentWillMount(){
// Make a request for a user with a given ID
axios.get('/data')
  .then(function (response) {
    // handle success
   
  
    this.setState({
      db: response.data
    })
  }.bind(this))
  .catch(function (error) {
    // handle error
    console.log(error);
  })




    // Make a request for a user with a given ID
// axios.get('http://localhost:4000/data')
// .then((response)=>{
//     const getdata = response.data
//     console.log(getdata)
//   this.setState({
//     db : getdata
//   }) 
// })

// .catch(function (error) {
//   // handle error
//   console.log(error);
// })

// ----------------------------------------------------------------------------------------------
  //  if(this.state.db === null){
  //    getProductData().then((res)=>
  //     this.setState({
  //       db : res
  //     })
  //    )
  //    }
    
  }

  handleContainer(){

    return this.state.db.map((value,key)=> <Container key={key} id={value.id} product_name={value.product_name} product_price={value.product_price} image={value.image} handleClickEdit={this.handleClickEdit} handleDelete={this.handleDelete} addToCart={this.addToCart}/>
    )
          // <Container key={key} product_name={value.product_name} product_price={value.product_price} image={value.image}/>
        
  }
  handleForm(){
    if(this.state.isFormShow === true){
      return <ProductForm handleChange={this.handleChange} product={this.state.product} handleSubmit={this.handleSubmit}/>
    }
  }
  handleUpdateForm(){
    if(this.state.isUpdateShow === true){
      return <ProductionUpdate handleChange={this.handleChange} product={this.state.product} handleUpdate={this.handleUpdate}/>
    }
  }
  handleClickForm(){
    this.setState({
      isFormShow : !this.state.isFormShow
    })
  }
  render() {
    // const list = this.state.db.map((item)=> <div>
    //   <ul>
    //     <li>{item.product_name}</li>
    //     <li>{item.product_price}</li>
    //   </ul>
    // </div>)
    // const list = this.state.cart.map((value,key)=> <ul key={key}><li>{value.id}</li></ul>)
    return (
      <div className="App">
      <Header/>
      <button type="submit" className="btn btn-info" onClick={this.handleClickForm}>Form</button>
      <br></br>
     
     
      <br></br>
      <div className="container-fluid">
    
        <div className="row">
        
        <div className="col">
        <div className="row">
        {this.handleContainer()}
        </div>
        </div>
      
  
       {this.handleForm()}
       {this.handleUpdateForm()}
        <Cart cartlist={this.state.cart} tongtien={this.state.tongtien} handleDeleteCart1={this.handleDeleteCart}/>
       
                

      </div>
  
      </div>

      </div>
    );
  }
}

export default App;
