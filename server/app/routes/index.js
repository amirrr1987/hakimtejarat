const router = require('express').Router()
const menuRoute = require('./menu')
const pageRoute = require('./page')

router.use("/menus", menuRoute)
router.use("/pages", pageRoute)


router.use((req, res) => {
    res.status(404);
    res.send({ success: false, message: "route Not found" });
});

module.exports = router;
