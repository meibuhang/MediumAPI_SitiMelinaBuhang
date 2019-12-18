const tb_article = require('../models').Articles;
const tb_cat = require('../models').Categories;
const tb_user = require('../models').Users;


exports.allArticles = (req, res) => {
    console.log("Processing func -> Add Category");
    tb_article.findAll({
        attributes: {
            exclude: [

                'category_id',
                'is_published',
                'is_archived',
                'slug',
                'user_id'
            ]
        },
        include: [{
                model: tb_cat,
                as: 'categories',
                attributes: {
                    exclude: [
                        "createdAt",
                        "updatedAt"
                    ]
                }
            },
            {
                model: tb_user,
                as: 'users',
                attributes: {
                    exclude: [
                        'password',
                        'createdAt',
                        'updatedAt',
                        'is_active'
                    ]
                }
            }
        ],
        where: {
            is_published: 1,
            is_archived: 0
        },
        order: [
            ["createdAt", "DESC"],
        ],
        limit: 5
    }).then(data => {
        res.status(200).send({
            is_success: 1,
            message: "Success",
            data: data
        })
    })
}

exports.articlesByCategory = (req, res) => {
    console.log("Processing func -> Article by Category");
    // const {
    //     id_Cat
    // } = req.params.idCat;
    const id = req.params.idCat;
    console.log(req.params.idCat);
    tb_article.findAll({


        include: [{
                model: tb_cat,
                as: 'categories',
                attributes: [
                    'id', 'name'
                ]

            },
            {
                model: tb_user,
                as: 'users',
                attributes: [
                    'id', 'fullname'
                ]

            }
        ],
        where: {

            category_id: id
        },
        order: [
            ["createdAt", "DESC"],
        ],
        limit: 5
    }).then(data => {
        res.status(200).send({
            is_success: 1,
            message: "Success",
            data: data
        })
    })
}