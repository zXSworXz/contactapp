var express = require('express'),
app = express();

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html')
});
//This redirect any path that start with '/js' to look into the '/client/js' folder
app.use('/', express.static(__dirname + "/"))

app.listen(3000);
console.log("Server running on port 3000........");