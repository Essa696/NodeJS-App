const express = require("express")
const app = express()
const bodyParser = require("body-parser")


app.use(bodyParser.json())
app.use("/", express.static(__dirname + "/" ))

app.post("/save-task", function(req, res) {

    const taskObj = req.body
    console.log("saved task" , taskObj.task)
    res.send({savedTask: taskObj.task})

} )

app.get("/get-tasks", function(req, res) {

    const tasks = [
        "learn E2E Dev",
        "Learn DevOps"
    ]
    res.send({tasks: tasks})
})

function doc() {

    console.log("App listning in port 3000")

}

app.listen(3000,doc)
