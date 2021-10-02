const mongoose = require("mongoose");

const Movie = mongoose.model("Movie", {
  title: {
    type: String,
    required: true,
  },
  actors: [String],
  release: Number,
  details: Object,
  prizes: [Object],
});

module.exports = Movie;
