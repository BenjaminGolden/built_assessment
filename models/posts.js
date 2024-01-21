const db = require('./knex')();
const { v4: uuidv4 } = require('uuid');

exports.create = async function (data) {

  const postData = {
    id: uuidv4(),
    title: data.title,
    contents: data.contents,
    timestamp: data.timestamp,
    categoryId: data.categoryId
  }


  console.log('model data', postData);

  await db('blog_post').insert(postData);
  return postData;

}

exports.get = async function (id) {
  const data = await db('blog_post')
    .select(
      'blog_post.id',
      'blog_post.title',
      'blog_post.contents',
      'blog_post.timestamp',
      'blog_post.categoryId',
      'blog_category.name as categoryName'
    )
    .leftJoin('blog_category', 'blog_category.id', 'blog_post.categoryId')
    .where({ 'blog_post.id': id })

  return data;
};


exports.getByCategoryId = async function (id) {

  const data = await db('blog_post')

    .select(
      'blog_post.id', 
      'blog_post.title', 
      'blog_post.contents', 
      'blog_post.timestamp', 
      'blog_post.categoryId',
      'blog_category.name as categoryName'
    )
    .join('blog_category', 'blog_category.id', 'blog_post.categoryId')
    .where({ 'categoryId': id })

  return data;

}

exports.update = async function (id, data) {

  console.log('model updated data', data);

  return await db('blog_post').update(data).where({ id: id });
}

exports.delete = async function (id) {

  return id ? await db('blog_post').del().where('id', id) : false;

}