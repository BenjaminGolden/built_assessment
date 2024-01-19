const posts = require('../models/posts');

exports.create = async function(req, res){

    let data = req.body;
    
    console.log('controller data', data);

    data = await posts.create(data)
    return res.status(200).send({ message: 'Post created', data:data });
  
  }

  exports.get = async function(req, res){
       const data = await posts.get(req.body.id);
       return res.status(200).send({ data })
  }

  exports.update = async function(req, res){

    const data = req.body;

    await posts.update(req.params.id, data)
    return res.status(200).send({ message: 'post updated', data })
  }

  exports.delete = async function(req, res){

    const data = req.body

    console.log('data', data);

    await posts.delete(req.params.id);
    return res.status(200).send({ message: 'Post deleted' })
  }