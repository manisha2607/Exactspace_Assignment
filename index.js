const { name } = require('ejs');
const express = require('express');
const path = require('path')

//intiating our app
const app = express();

//defining our port
const port = 9000;

//setting our view engine
app.set('view engine', 'ejs');
app.set('views', './views')

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api', (req, res) => {

  const jsonObjectInput = req.body;
 
  const data = jsonObjectInput.json



const modifiedJsonData = data.replace(/\r\n/g, '');
const jsonObject = JSON.parse(modifiedJsonData);



//implementing advance HTML By Using EJS
for(let key in jsonObject) {
  console.log(key);
  let name = jsonObject.name
  return res.render('get_result', {
    key: key,
    jsonObject
 })
}

});

app.listen(port, (err) => {
    if(err) {
        console.log('error in running the server!!')
    }
  console.log(`Server is up and running on port :: ${port}`);
});