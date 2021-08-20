const express = require('express');
const db = require('./models');
const cors = require('cors');
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

app.use('/', usersRoute);      // visitor: not authenticated
app.use('/user', postsRoute);  // posting Post: user authenticated
//app.use('/user', commentsRoute); // posting Comment: user authenticated
//app.use('/user', imagesRoute);  // uploading Image: user authenticated
//app.use('/user/uploads', express.static('uploads')); // public folder, accessible with image_url

module.exports = app

db.sequelize.sync().then((req) => {
    app.listen(3008, () => { console.log("server running"); });
});