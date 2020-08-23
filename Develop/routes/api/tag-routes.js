const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product]
  }).then(Tag => {
    res.json(Tag);
  })
  
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(Tag => {
    res.json(Tag);
  })
  
});

router.post('/', (req, res) => {
  Tag.create(req.body).then(Tag => {
    res.json(Tag);
  })
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(Tag => {
    res.json(Tag);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.body.id
    }
  }).then(Tag => {
    res.json(Tag);
  });
});


module.exports = router;
