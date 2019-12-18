module.exports = function (app) {
    const article = require("../controllers/article");
    const categories = require("../controllers/categories")
    app.post("/api/category", categories.addCateggories);
    app.get("/api/allArticles", article.allArticles);
};