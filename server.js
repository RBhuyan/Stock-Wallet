var express = require ('express'),
    app = express(),
    bodyParser = require('body-parser');

//var commentRoutes = require("./routes/comments"),
//    assetRoutes = require("./routes/assets");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
    
//app.use(commentRoutes);
//app.use(assetRoutes);

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.listen(5656, () => {
    console.log('http://localhost:5656')
})