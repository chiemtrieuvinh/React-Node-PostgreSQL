var express = require('express');
var router = express.Router();



const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: '123',
  port: 5432,
})




/* GET home page. */
router.get('/', function(req, res, next) {});


/* GET home page. */
router.get('/data', function(req, res, next) {
  console.log('eqweqeqwe')
  // // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // // Request methods you wish to allow
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // // Set to true if you need the website to include cookies in the requests sent
  // // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  

  pool.query('SELECT * FROM product_manager', (err, response) => {
    if(err){
      console.log(err)
    }else{
      res.send(response.rows)
    }
  })
 
});



/////////////Add product
router.get('/addproduct', function(req, res, next) {
  res.render('add',{

  })
});
router.post('/postproduct', function(req, res, next) {
  const product_name = req.body.product_name
  const product_price = req.body.product_price
  const image = req.body.image
  pool.query('INSERT INTO product_manager(product_name,product_price,image) VALUES($1,$2,$3)',[product_name,product_price,image],(err,response)=>{
    if(err){
      res.send(err)
    }else{
      res.send('nhận được dữ liệu rồi'+ product_name + ' ' + product_price + ' ' + image)
    }
  })

});
///update
router.get('/update', function(req, res, next) {
  res.render('update',{

  })
});
//UPDATE product_manager SET product_name=$1, product_price=$2,image=$3 WHERE id = $4
router.post('/updateproduct', function(req, res, next) {
  const product_name = req.body.product_name
  const product_price = req.body.product_price
  const image = req.body.image
  const id = req.body.id
  pool.query('UPDATE product_manager SET product_name=$1, product_price=$2,image=$3 WHERE id = $4',[product_name,product_price,image,id],(err,response)=>{
    if(err){
      res.send(err)
    }else{
      res.send('nhận được dữ liệu rồi'+ product_name + ' ' + product_price + ' ' + image + '' + id)
    }
  })

});



router.get('/delete', function(req, res, next) {
  res.render('delete',{

  })
});
///Delete dữ liệu
router.post('/deleteproduct', function(req, res, next) {
  const id = req.body.id
  pool.query('DELETE FROM product_manager WHERE id=$1',[id],(err,response)=>{
    if(err){
      res.send(err)
    }else{
      res.send('nhận được dữ liệu rồi'+ id)
    }
  })

});
module.exports = router;
