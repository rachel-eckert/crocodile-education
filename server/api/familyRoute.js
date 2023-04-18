const router = require("express").Router();
const { Family, Species } = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const families = await Family.findAll();
    res.json(families);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const family = await Family.findByPk(req.params.id, {
      include: {
        model: Species,
      },
    });
    res.json(family);
  } catch (err) {
    next(err);
  }
});
