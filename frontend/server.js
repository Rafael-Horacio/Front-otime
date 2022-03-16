const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/components/"));
app.get(/.*/, function(req, res){
    res.sendFile(__dirname + "/components/HelloWorld.vue")
});
app.listen(port);

console.log("server started...");
