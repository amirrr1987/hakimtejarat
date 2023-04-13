const router = require('express').Router()
const menuRoute = require('./menu')

router.use("/menus", menuRoute)


router.use((req, res) => {
    res.status(404);
    res.send({ success: false, message: "route Not found" });
});

module.exports = router;
