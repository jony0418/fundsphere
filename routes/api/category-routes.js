const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products (hint: check out the second parameter in the findAll() option)
    Category.findAll({
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
    })
    .then((category) => {
      res.json(category);
    }
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    }
    );
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
    Category.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
    })
    .then((category) => {
      if (!category) {
        res.status(404).json({
          message: 'No category found with this id'
        });
        return;
      }
      res.json(category);
    }
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    }
    );
});

router.post('/', (req, res) => {
  // create a new category 
    Category.create(req.body)
    .then((category) => {
      res.json(category);
    }
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    }
    );
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
    Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then((category) => {
      if (!category) {
        res.status(404).json({
          message: 'No category found with this id'
        });
        return;
      }
      res.json(category);
    }
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    }
    );
});

// delete products with the category_id
router.delete('/:id', (req, res) => {
Product.destroy({
  where: {
      category_id: req.params.id
  }
})
.then(() => {
  // deleting the products, delete the category
  Category.destroy({
      where: {
          id: req.params.id
      }
  })
  .then((category) => {
      res.json(category);
  })
  .catch((err) => {
      console.log(err);
      res.status(500).json(err);
  });
})
.catch((err) => {
  console.log(err);
  res.status(500).json(err);
});
});

module.exports = router;
