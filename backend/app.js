const express = require('express');
const db = require('./models');
const cors = require('cors');
const api = require("./routes")
// const bodyParser = require('body-parser');
const postsRoute = require ('./routes/posts');
const usersRoute = require ('./routes/users');
const imagesRoute = require ('./routes/images');
const commentsRoute = require('./routes/comments');

const app = express();
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api); 

module.exports = app

db.sequelize.sync().then((req) => {
    app.listen(3008, () => { console.log("server running"); });
});