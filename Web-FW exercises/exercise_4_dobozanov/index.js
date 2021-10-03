
const express = require('express')
const app = express()
const port = 4000
const productData = require('./data.json')
const bodyParser = require('body-parser')
const cors = require('cors')
const { v4: uuidv4 } = require ('uuid');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to Wine&Co!')
})


app.get('/wine', (req, res) => {
    res.json(productData);
  })

app.get('/wine/:id', (req,res) =>{
    const result = productData.items.find(wine => wine.id === req.params.id);

    res.json(result);
})

app.get('/wine/:name', (req,res) =>{
  const result = productData.items.find(wine => wine.name === req.params.name);

  res.json(result);
})

app.get('/wine/:region', (req,res) =>{
  const result = productData.items.find(wine => wine.region === req.params.region);

  res.json(result);
})


app.post('/wine', (req,res) =>{
    productData.items.push({
        id: uuidv4(),
        name: req.body.name,
        brand: req.body.brand,
        region: req.body.region,
        price: req.body.price,
        image: req.body.image
    });

    res.send('New Wine has been added to the product data');
})

app.post('/users', (req,res) =>{
  productData.users.push({
      id: uuidv4(),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      adress: req.body.adress,
      town: req.body.town,
      age: req.body.age
  });

  res.send('An new User has been registered');
})

app.post('/purchases', (req,res) =>{
  productData.purchases.push({
      id: uuidv4(),
      userId: req.body.userId,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      articleData: [{
        name: req.body.price,
        price: req.body.price,
      }],
      totalSum: req.body.totalSum
  });
  res.send('An new User has been registered');
})

app.delete('/purchase/:userId/:id', (req, res) =>{
  const result = productData.purchases.findIndex(p => p.userId === req.params.userId && p.id === req.params.id);

  if(result !== -1){
    productData.purchase.splice(result, 1);
    res.send('Purchase got deleted.');
}else{
    res.send('Purchase not found.');
}
})

app.get('/purchase/:userId', (req, res) => {
  const result = productData.purchases.find(p => p.userId === req.params.userId);

  res.json(result);
})

app.get('/purchase/:id', (req, res) => {
  const result = productData.purchases.find(p => p.id === req.params.id);

  res.json(result);
})

app.delete('/wine/:id', (req, res) => {
  const result = productData.items.findIndex(wine => wine.id === req.params.id);

  if(result !== -1){
    productData.items.splice(result, 1);
    res.send('Wine got deleted.');
}else{
    res.send('Wine not found.');
}
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})