const Authors = require('../models/authors.model');

// create a nes author
module.exports.createAuthor = (request, response) => {
  const { name } = request.body;
  Authors.create({
    name
    
  })
    .then(authors => response.json(authors))
    .catch(err => response.json(err));
}

module.exports.findAllAuthors = (req, res) => {
  Authors.find()
    .then(allAuthors => res.json({ Authors:allAuthors }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.getAuthor = (request, response) => {
  Authors.findOne({_id:request.params.id})
      .then(author => response.json(author))
      .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
  Authors.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updatedAuthor => response.json(updatedAuthor))
      .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
  Authors.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}

