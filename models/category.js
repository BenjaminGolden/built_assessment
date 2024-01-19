const db = require('./knex')();

exports.get = async function(id){

    const data = await db('blog_category')

    .select('blog_category.id', 'blog_category.name', 'blog_category.timestamp')

    return data;

}

exports.getByCategory = async function(id){

    const data = await db('blog_category')

    .select('blog_category.id', 'blog_category.name', 'blog_category.timestamp')
    .where({ 'blog_category.id': id })

    return data;

}