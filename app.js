const express = require('express')
const db = require('./db/db')
const Itemsroutes = require('./routes/demo.route');
var body = require('body-parser');

const app = express()

// db.connect()


app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/demo', Itemsroutes);


app.use(body.json());
app.use(body.urlencoded(
  {extended: true}
));


app.listen(8000, () => {
  console.log('Server started!')
})