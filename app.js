const request = require("request");
const express = require("express");
const locus = require("locus");

var app = express();
app.set("view engine", "esj");

app.get('/results/:search*?',function(req, res){
    var search = "california"
    if(req.params.search){
        search = req.params.search;
          }
    request(`http://www.omdbapi.com/?s=${search}&apikey=thewdb`, function(err, response, body){
        if (!err && response.statusCode == 200) {
            var parsedBody = JSON.parse(body);
            res.send(parsedBody.Search[0]);
        } else {
            console.log("ERRRRROR!!!");
            console.log(err);
        }

    })
})

app.listen(3000,function(){
    console.log("Listening on port 3000");

})
