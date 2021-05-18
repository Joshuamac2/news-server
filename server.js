const dotenv = require("dotenv");
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require("passport");
const users = require("./routes/api/users");

dotenv.config();

// const db = require('./db')
const articleRouter = require('./routes/article-router')

const app = express()

const port = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize());
require("./config/passport")(passport);

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(e => {
    console.error('Connection error', e.message)
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', articleRouter)
app.use("/api/users", users);

app.listen(port, () => console.log(`Server running on port ${port}`))


// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const path = require("path");
// const mongoose = require('mongoose')
//
// mongoose
//   .connect(process.env.MONGO, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .catch(e => {
//     console.error('Connection error', e.message)
//   });
//
// require('dotenv').config();
// require("./config/passport")(passport);
//
// const users = require("./routes/api/users");
// const articleRouter = require('./routes/article-router')
//
// const app = express()
// const port = process.env.PORT || 5000
//
// app.use(bodyParser.urlencoded({
//   extended: true
// }))
// app.use(cors())
// app.use(bodyParser.json())
// app.use(passport.initialize());
//
// const passport = require("passport");
//
//
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//
// app.use('./routes/article-router.js', articleRouter)
// app.use("/api/users", users);
// app.use("./config/passport.js", passport);
// app.use("./config/keys.js", keys);
//
//
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('news-front/build'))
// }
//
// app.listen(port, () => console.log(`Server running on port ${port}`))













// const dotenv = require("dotenv");
// const mongoose = require('mongoose')
// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const passport = require("passport");
// const users = require("./routes/api/users");
//
// dotenv.config();
//
// const articleRouter = require('./routes/article-router')
//
// const app = express()
//
// const port = process.env.PORT || 5000;
//
//
// app.use(bodyParser.urlencoded({
//   extended: true
// }))
// app.use(cors())
// app.use(bodyParser.json())
// app.use(passport.initialize());
// require("./config/passport")(passport);
//
// mongoose
//   .connect(process.env.MONGO, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .catch(e => {
//     console.error('Connection error', e.message)
//   });
//
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.use('/api', articleRouter)
// app.use("/api/users", users);
//
// app.listen(port, () => console.log(`Server running on port ${port}`))










// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const path = require("path");
// const mongoose = require('mongoose')
//
// mongoose
//   .connect(process.env.MONGO, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .catch(e => {
//     console.error('Connection error', e.message)
//   });
//
// require('dotenv').config();
// require("./config/passport")(passport);
//
// const users = require("./routes/api/users");
// const articleRouter = require('./routes/article-router')
//
// const app = express()
// const port = process.env.PORT || 5000
//
// app.use(bodyParser.urlencoded({
//   extended: true
// }))
// app.use(cors())
// app.use(bodyParser.json())
// app.use(passport.initialize());
//
// const passport = require("passport");
//
//
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//
// app.use('./routes/article-router.js', articleRouter)
// app.use("/api/users", users);
// app.use("./config/passport.js", passport);
// app.use("./config/keys.js", keys);
//
//
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('news-front/build'))
// }
//
// app.listen(port, () => console.log(`Server running on port ${port}`))
