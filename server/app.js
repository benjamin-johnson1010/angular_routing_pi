var express = require("express");
var path = require("path");
var app = express();

app.set("port", (process.env.PORT || 5000));

app.get("/*", function(req,res){
    console.log("Here is the property: ", req.params[0]);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Turned on the thing! : ", app.get("port"));
});
