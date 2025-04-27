const router = require('express').Router();
let Destination = require('../models/destination.model');

// Get all destinations
router.route('/').get((req, res) => {
  Destination.find()
    .populate('activities')
    .then(destinations => res.json(destinations))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add new destination
router.route('/add').post((req, res) => {
  const { name, country, image, description, flightDetails } = req.body;

  const newDestination = new Destination({
    name,
    country,
    image,
    description,
    flightDetails
  });

  newDestination.save()
    .then(() => res.json('Destination added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 