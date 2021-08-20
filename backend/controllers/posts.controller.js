const models = require('../models');
const validatorClass = require('fastest-validator');

/////// CREATE///////

function createPost(req, res) {

    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        gameId: req.body.game_id,
        userId: req.userData.userId
    }

    ///// Validation for Create /////

    const validationSchema = {
        title: {type: "string", optional: false, max: "100"},
        content: {type: "string", optional: false, max: "500"},
        imageUrl : {type: "string", optional: true},
        gameId: {type: "number", optional: false}
    }

    const validatorInstance = new validatorClass();
    const validationResponse = validatorInstance.validate(post, validationSchema);

    if(validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed, please enter all the required fields",
            errors: validationResponse
        });
    }

    models.Game.findByPk(req.body.game_id).then(result => {
        if(result) {

            // If the Game exists, then we can create a post

            models.Post.create(post).then(result => {
                res.status(201).json({
                    message: "Squad Post successfully created",
                    post: result
                });
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong!",
                    error: error
                });
            });
        } else {
            res.status(400).json({
                message: "Select a valid game to make a post"
            });
        }
    });
}

/////// READ ///////

function readPost(req, res){

    const id = req.params.id;

    models.Post.findByPk(id).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Squad Post not found"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function readAllPosts(req, res){

    models.Post.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

/////// UPDATE ///////

function updatePost(req, res){

    const id = req.params.id;
    const updatedPost = {
        id: req.body.id,
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        userId: req.userData.userId
        // gameId: req.body.game_id
    }
    ///// Validation for Update /////

    const validationSchema = {
        title: {type: "string", optional: true, max: "100"},
        content: {type: "string", optional: true, max: "500"},
        imageUrl : {type: "string", optional: true},
        gameId: {type: "number", optional: true}
    }

    const validatorInstance = new validatorClass();
    const validationResponse = validatorInstance.validate(updatedPost, validationSchema);

    if(validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    console.log(id)
    console.log(updatedPost.userId)

    models.Post.findAll({where: {id:id, userId: updatedPost.userId}})
    .then((resp)=>{
        if(resp.length == 0){
            res.status(404).json({
                message: "tentative de modification d'un Squad Post "
            });
        }
    })

    models.Post.update(updatedPost, {where: {id:id, userId: updatedPost.userId}}).then(result => {
        if (result) {
            res.status(200).json({
                message: "Squad Post successfully updated",
                post: updatedPost
            });
        } else {
            res.status(404).json({
                message: "Squad Post not found"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

/////// DELETE ///////

function deletePost(req, res) {

    const id = req.params.id;
    const userId = req.userData.userId;
    console.log(req)

    models.Post.destroy({where: {id:id, userId: userId}}).then(result => {   
        if(result != 0){
            res.status(200).json({
                message: "Squad Post successfully deleted",
                nbPostDelete: result 
            });
        } else {
            res.status(401).json({
                message: "Unauthorized",
                nbPostDelete: result 
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

/////// EXPORTS ///////

module.exports = {
    createPost : createPost,
    readPost : readPost,
    readAllPosts : readAllPosts,
    updatePost : updatePost,
    deletePost : deletePost
}