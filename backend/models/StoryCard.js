const mongoose = require('mongoose');

const storyCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    required: true,
  },
cover: {
    type: String,
  },
content: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('StoryCard', storyCardSchema);
