const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
app.use(bodyParser.json());
app.post('/',function(req,res){
    console.log(req.body);
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });