const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = new Schema(
  {
    title: { type: String, required: true },
    sub: { type: String, required: true },
    link: { type: String, required: true },
  },
)

module.exports = mongoose.model('articles', Article)
