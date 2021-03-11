const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require("passport");
const users = require("./routes/api/users");
const db = require('./db')
const articleRouter = require('./routes/article-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize());

require("./config/passport")(passport);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', articleRouter)
app.use("/api/users", users);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
