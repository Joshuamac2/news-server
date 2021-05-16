const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require("passport");
const users = require("./routes/api/users");
const path = require("path");

const db = require('./db')
const articleRouter = require('./routes/article-router')

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, "client", "build")))


require("./config/passport")(passport);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "news-front", "build", "index.html"));
});

app.use('/api', articleRouter)
app.use("/api/users", users);

app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${port}`))
