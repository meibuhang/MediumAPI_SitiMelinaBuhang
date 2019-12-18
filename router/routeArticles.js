module.exports = function (app) {
    const article = require('../controllers/article');
    //app.post('/api/category', categories.addCateggories);
    app.get('/api/allArticles', article.allArticles);

}