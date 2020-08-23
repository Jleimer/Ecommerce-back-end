const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
 Category.findAll({
   include: [ Product ]
 }).then(Category => {
   res.json(Category);
 })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(Category => {
    res.json(Category);
  })
});

router.post('/', (req, res) => {
  Category.create(req.body).then(Category => {
    res.json(Category);
  });
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(Category => {
    res.json(Category);
  });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.body.id
    }
  }).then(Category => {
    res.json(Category);
  });
});

module.exports = router;
