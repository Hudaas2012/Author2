const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Aothorsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(".config.js: Established connection to Database"))
    .catch(err => console.log("ERROR:", err));