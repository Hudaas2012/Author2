const { get } = require("mongoose");
const AuthorController = require("../controllers/authors.controller");

module.exports = (app) => {
    app.get("/api/", AuthorController.findAllAuthors);
    
    app.post("/api/author/new", AuthorController.createAuthor);
    app.get("/api/author/:id", AuthorController.getAuthor);
    app.put("/api/author/edite/:id", AuthorController.updateAuthor);
    app.delete("/api/author/delete/:id", AuthorController.deleteAuthor);
}