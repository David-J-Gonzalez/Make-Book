const mongoose = require('mongoose');

const storyCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  label: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('StoryCard', storyCardSchema);
