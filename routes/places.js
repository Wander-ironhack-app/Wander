const express = require('express');
const router = express.Router();
const Place = require('../models/storagePlaces');


//console.log(Place);

/*
router.get('/', (req, res, next) => {
  res.render('user/placeAdd.hbs');
});

*/ 

//router.get('xxxxx', (req, res, next) => {
//  Place.findById(req.params.id.geometry.coordinate)
//})


router.post('/addPlace', (req,res,next) => {
  //const {name, coordinates} = req.body; 
  // Place.create({name, coordinates})
  // .then(place => {
  //   console.log('THIS IS THE PLACE',place)
  // }).catch(err => {
  //   console.log(err); 
  // })
  console.log(req.body)
})

//e.result.geometry.coordinates


/*
router.get('/placeAdd', (req, res, next) => {
  Place.find().then( places => {
    res.render('/placeAdd');
  })
    .catch(err => {
      next(err);
    });
});
 */

/*
router.get('/new', (req, res, next) => {
  res.render('celebrities/new.hbs');
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/show.hbs', { celebrity });
    })
    .catch(err => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      next(err);
    })
});

router.post('/:id', (req, res, next) => {
  console.log(req.body);
  const { celebrityname, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, { name: celebrityname, occupation: occupation, catchPhrase })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      next(err);
    });
})

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      next(err);
    })
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(err => {
      next(err);
    });
});
*/
module.exports = router;