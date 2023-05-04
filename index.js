const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

const recipes = require('./data/recipes.json');
// use cors
app.use(cors());


app.get('/', (req, res) => {
  res.send('Fooden-server-side')
});

// get request all json data
app.get('/recipes',(req, res)=>{
    res.send(recipes)
});

// get request specific json data
app.get('/recipes/:id', (req ,res)=>{
  const id = req.params.id
  const singleRecipes = recipes.find(r=> r.id === id)
  res.send(singleRecipes)
})


app.listen(port, () => {
  console.log(`Fooden-server-side API is running on port ${port}`)
});