const router = require('express').Router()
const MenuController = require('../controllers/menu')

router.post('/', MenuController.create )
router.get('/', MenuController.getAll )
router.get('/:id', MenuController.getOne )
router.put('/:id', MenuController.update )
router.delete('/:id', MenuController.delete )





module.exports = router