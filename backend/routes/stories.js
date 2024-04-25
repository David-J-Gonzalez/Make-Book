const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const Story = require('../models/StoryCard');


router.post('/create', bodyParser.json(), (req, res) => {
    Story.create(req.body)
        .then((story) => res.json(story))
        .catch((err) => res.status(400).json({error: 'Error', details: err.message}));
});
router.get('/', (req, res) => {
    Story.find()
        .then((story) => res.json(story))
        .catch((err) => res.status(404).json({noitemfound: 'No stories yet'}));
});
router.get('/:id', (req, res) => {
    Story.findById(req.params.id)
        .then((story) => res.json(story))
        .catch((err) => res.status(404).json({noitemfound: 'No such story'}));
});

router.put('/update/:id', (req, res) => {
    Story.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((story) => {
            if (!story) {
                return res.status(404).json({ noitemfound: 'No such story' });
            }
            res.json(story);
        })
        .catch((err) => res.status(400).json({ error: 'Error updating the story', details: err.message }));
});

router.delete('/delete/:id', (req, res) => {
    Story.findByIdAndDelete(req.params.id)
        .then((story) => {
            if (!story) {
                return res.status(404).json({ message: 'No such story to delete' });
            }
            res.json({ message: 'Story deleted successfully' });
        })
        .catch((err) => res.status(400).json({ error: 'Error deleting the story', details: err.message }));
});

module.exports = router;