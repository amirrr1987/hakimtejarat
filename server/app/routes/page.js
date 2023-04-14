const router = require('express').Router()
const PageController = require('../controllers/page')

router.post('/', PageController.create )
router.get('/', PageController.getAll )
router.get('/:id', PageController.getOne )
router.put('/:id', PageController.update )
router.delete('/:id', PageController.delete )





module.exports = router