const router = require("express").Router();
const models = require("../models");

router.get("/", async (req, res) => {
  try {
    const cats = await models.Cat.find();
    res.json(cats);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const createdCat = await models.Cat.create(req.body);
    res.json(createdCat);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
