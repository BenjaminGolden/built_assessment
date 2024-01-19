const db = require('./knex')();
const { v4: uuidv4 } = require('uuid');

exports.create = async function(data){
  
  const postData = {
    id: uuidv4(),
    title: data.title, 
    contents: data.contents,
    categoryId: data.categoryId
  }
  
  
  console.log('model data', postData);

    await db('blog_post').insert(postData);
    return postData;
    
    }
    
    exports.get = async function(id){
    
        const data = await db('blog_post')
    
        .select('blog_post.id', 'blog_post.title', 'blog_post.contents', 'blog_post.timestamp', 'blog_post.categoryId')
    
        .join('blog_category', 'blog_category.id', 'blog_post.category') 
    
        return id ? data[0] : null;
    
    }

    exports.update = async function(id, data){
      
        return await db('blog_post').update(data).where({
          
          ...id && { id: id },
          ...data && { data: data }

        
        });
      }
    
    exports.delete = async function(id){
    
        return id ? await db('blog_post').del().where('id', id) : false;
        
    }