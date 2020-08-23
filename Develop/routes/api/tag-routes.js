const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        through: ProductTag,
        as: 'product_tags'
      }
    ]
  })
  .then(dbTagData => res.json(dbTagData))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'category_id'],
        through: ProductTag,
        as: 'product_tags'
      }
    ]
  })
  .then(dbTagData => res.json(dbTagData))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
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
