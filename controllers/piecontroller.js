const router = require("express").Router();
const { PieModel } = require("../models");
router.get("/", async (req, res) =>{
  try {
    const allPies = await PieModel.findAll();
    res.status(200).json(allPies);
  } catch (err) {
    res.status(500).json({
      error: err,
    })
  }
})
router.post("/", async (req, res) => {
  const {
    nameOfPie,
    baseOfPie,
    crust,
    timeToBake,
    servings,
    rating,
  } = req.body;
  try {
    const Pie = await PieModel.create({
      nameOfPie,
      baseOfPie,
      crust,
      timeToBake,
      servings,
      rating,
    });
    res.status(201).json({
      message: "Pie successfully created",
      Pie,
    });
  } catch (err) {
    res.status(500).json({
      message: `Failed to create pie: ${err}`
    })
  }
})
// findOne()
router.get("/name", async (req, res) => {
  try {
    const locatedPie = await Pie.findone({
      where: {
        nameOfPie: req.params.nameOfPie,
      },
    });
    res.status(200).json({
      message: "Pies successfully retrieved",
      locatedPie,
    });
  } catch (err) {
    res.status(500).json({
      message: `Failed to retrieve pies: ${err}`,
    });
  }
});
// update()
router.update("/:id", (req, res) => {
  const {
    name,
    baseOfPie,
    crust,
    timeToBake,
    servings,
    rating,
  } = req.body;
  try {
    await PieModel.update(
      { nameOfPie, baseOfPie, crust, timeToBake, servings, rating },
      { where: { id: req.body.id }, returning: true }
    ).then((result) => {
      res.status(200).json({
        message: "Pie successfully updated",
        updatedPie: result,
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Failed to update pie: ${err}`,
    });
  }
});
module.exports = router