const express = require("express")
const app = express()



app.use("/", express.static(__dirname + "/" ))

function doc() {

    console.log("App listning in port 3000")

}

app.listen(3000,doc)
