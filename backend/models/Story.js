const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    cover: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    }
});

module.exports = Story = mongoose.model('story', StorySchema);
