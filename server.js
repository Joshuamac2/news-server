const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require("passport");
const path = require("path");

const db = require('/Users/joshua/makers/thenewslab/news-server/db/index.js')
const articleRouter = require('/Users/joshua/makers/thenewslab/news-server/routes/article-router.js')
const users = require("/Users/joshua/makers/thenewslab/news-server/routes/api/users.js");


const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, "client", "build")))


require("/Users/joshua/makers/thenewslab/news-server/config/passport.js")(passport);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "news-front", "build", "index.html"));
});

app.use('/Users/joshua/makers/thenewslab/news-server/routes/article-router.js', articleRouter)
app.use("/Users/joshua/makers/thenewslab/news-server/routes/api/users.js", users);

app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${port}`))
