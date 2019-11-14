var express = require ('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose");

//var commentRoutes = require("./routes/comments"),
//    assetRoutes = require("./routes/assets");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/node-demo");

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

//VVU9XURCYDIIURQO - API KEY