const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Fooden-server-side')
});



app.get('/recipes',(req, res)=>{
    res.send(recipes)
});

app.get('/recipes/:id', (req ,res)=>{
  const id = req.params.id
  const singleRecipes = recipes.find(r=> r.id === id)
  res.send(singleRecipes)
})


/*
app.get('/categories/:id', (req ,res)=>{
  const id = parseInt(req.params.id)
  if(id === 0){
    res.send(news)
  }
  else{
    const categoryNews = news.filter(n=> parseInt(n.category_id) === id)
    res.send(categoryNews)
  }
})
/*


app.get('/news', (req, res)=>{
  res.send(news)
});

app.get('/news/:id', (req, res)=>{
  const id = req.params.id
  // console.log(id);
  const selectedNews = news.find(n=> n._id === id)
  res.send(selectedNews)
}); */



app.listen(port, () => {
  console.log(`Fooden-server-side API is running on port ${port}`)
});