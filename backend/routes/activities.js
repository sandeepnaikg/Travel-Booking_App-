const router = require('express').Router();
let Activity = require('../models/activity.model');

// Get all activities
router.route('/').get((req, res) => {
  Activity.find()
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get activities by destination
router.route('/destination/:id').get((req, res) => {
  Activity.find({ destination: req.params.id })
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
}); 