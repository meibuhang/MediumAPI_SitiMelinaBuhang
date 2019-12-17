module.exports = function (app) {
    const categories = require('../controllers/categories');
    app.post('/api/category', categories.addCateggories);
    app.get('/api/allcategory', categories.allCategories);

}