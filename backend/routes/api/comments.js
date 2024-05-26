/**
 * Express router for handling comment-related routes.
 * @module routes/api/comments
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

/**
 * GET /api/comments
 * Retrieves all comments.
 * @name GET/api/comments
 * @function
 * @memberof module:routes/api/comments
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get("/", (req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch(err => console.error(err));
});

/**
 * POST /api/comments
 * Creates a new comment.
 * @name POST/api/comments
 * @function
 * @memberof module:routes/api/comments
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.post("/", (req, res) => {
    Comment.create(req.body)
        .then(comment => res.json(comment))
        .catch(err => console.error(err));
});

/**
 * GET /api/comments/:id
 * Retrieves a comment by its ID.
 * @name GET/api/comments/:id
 * @function
 * @memberof module:routes/api/comments
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get("/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        res.json(comment);
    } catch (err) {
        console.error(err);
    }
}); 

//git checkout -b feature/rivka-comments


