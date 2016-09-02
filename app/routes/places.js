var express = require('express');
var router = express.Router();

var places = require('../models').places;


/* GET all places. */
router.get('/', function(req, res, next) {
  places.findAll({order: [["id", "DESC"]]})
  .then(function(places){
    res.json(places);
    })
    .catch(function(error){
      res.send(500, error);
   });
});

/* GET place details by ID */
router.get('/:id', function(req, res, next) {
  places.findAll({where: { id: req.params.id }})
  .then(function(placeDetail){
    res.json(placeDetail);
    })
    .catch(function(error){
      res.send(500, error);
   });
});

/* POST new place */
router.post('/', function(req, res, next) {
  places.create(req.body)
  .then(function (place) {
    res.json(place);
    })
    .catch(function(error){
      return res.send(500, error);
   });
 //}
});

/* UPDATE place */
router.put('/:id', function(req, res, next) {
  places.findById(req.params.id).then(function(place){
    if(place) {
      return place.update(req.body);
    } else {
      res.send(404, error)
    }
  })
  .then(function (place) {
    res.json(place);
    })
    .catch(function(error){
      res.send(500, error);
   });
});

/* DELETE place */
router.delete("/:id", function(req, res, next){
  places.findById(req.params.id)
  .then(function(place){
    if(place) {
      return place.destroy();
    }
    else {
      res.send(404)
    }
  })
  .catch(function(error){
    res.send(500,error);
  });
});

module.exports = router;
