
//imports
const express = require("express");
const ejs = require('ejs')

//settings
const app = express();
app.use(express.static(__dirname +'/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


//routing

app.get('/', (req, res) => {
   context = {
      luckyNums: [12,27]
   }
   res.render('index', context)
});
app.get('/home', (req, res) => {
   res.send("Hello Home");
});




//starting server
app.listen(8000, () => console.log("listening on port 8000"));