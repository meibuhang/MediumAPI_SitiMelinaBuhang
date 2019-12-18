module.exports = function (app) {
    const article = require("../controllers/article");
    app.get("/api/allArticles", article.allArticles);
    app.get("/api/category/:idCat/allArticles", article.articlesByCategory);
};