const { Author } = require("../models/Authors.model");
module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({ Author: newAuthor }))
        .catch(err => res.status(400).json(err));
}
module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(Author => response.json(Author))
        .catch(err => response.json(err))
}
module.exports.getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(Author => res.json({ Author: Author }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));

}
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err))
}
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}