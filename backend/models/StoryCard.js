const mongoose = require('mongoose');

const storyCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  label: {
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
