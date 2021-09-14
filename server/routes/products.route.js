const AuthorController = require("../controllers/authors.controller")
module.exports = app => {
    app.post("/create/author", AuthorController.createNewAuthor)
    app.get("/display/authors", AuthorController.getAllAuthors)
    app.put('/update/author/:id', AuthorController.updateAuthor);
    app.get("/display/author/:id", AuthorController.getOneAuthor)
    app.delete('/delete/author/:id', AuthorController.deleteAuthor);
}