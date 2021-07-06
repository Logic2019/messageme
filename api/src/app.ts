import express from 'express';
import {Product } from './product';
 
const app = express();
const port = 3001;
 
function getProduct(){
  let p = new Product();
  p.Id = "1";
  p.Price= 100;
  p.Title="Cricket Bat";
  p.inStock = true;
  return p;   
 
}
app.get('/products', (req, res) => {
  res.send(getProduct());
});
 
app.listen(port), (err:any) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
};