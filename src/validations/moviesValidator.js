const { check } = require("express-validator")

module.exports = [
    check("title").notEmpty().withMessage("Title Requerido"),
    check("rating").notEmpty().withMessage("Rating Requerido"),
    check("awards").notEmpty().withMessage("Awards Requerido"),
    check("release_date").notEmpty().withMessage("Release date Requerido")
]