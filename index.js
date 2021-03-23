require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000; 

app.use(express.json());

app.get('/users', (req, res) => {
    const user = [
      {
        id: 1,
        name: 'Myke',
      },
      {
        id2: 2,
        name: 'Tony', 
      },
    ]
    
    res.json(user);
})
app.post('/users', (req, res) => {
  const user   = req.body;
  user.id = 1000;
  const result ={
    message: 'User created',
    user
  };
  res.status(201).json(result);
})

app.put('/users/:id', (req, res) => {
  const {id} = req.params;
  const user = req.body;
  user.id = id;
  const result = {
    message: 'User updated',
    user,
  };
  res.json(result);
})

app.patch('/users/:id', (req, res) => {
  const user = {
    id: 45,
    name : 'Toto',
  };
  const {id} = req.params;
  if(id == user.id){
    user.name = req.body.name;
  }
  const result = {
    message: 'User updated with patch',
    user
  };
  res.json(result);
})
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  //const { id } = req.params;

  const result = {
    message: `User with id: ${id} deleted`
  }

  res.json(result);
})
 
app.listen(port, ()=>{
    console.log(`########### App Started. Port: ${port} ###########`);
})