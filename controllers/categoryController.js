const category = require('../models/category');

exports.get = async function(req, res){

    const data = req.body;

    const categoryData = await category.get(data);
    console.log('category controller data', categoryData);
    return res.status(200).send({ data: categoryData })
}

exports.getById = async function(req, res){
    const data = await category.getByCategory(req.params.id);
    return res.status(200).send({ data })
}
