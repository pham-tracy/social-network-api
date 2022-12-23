const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

//api/thoughts/:userId
router.get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
  .route("/:thoughtId/reactions")
  .post(createReaction)
  .delete(removeReaction);

module.exports = router;
