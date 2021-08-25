const models = require('../models');
const validatorClass = require('fastest-validator');

/////// CREATE///////

function createPost(req, res) {
 console.log(req.body)
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        GameId: +req.body.gameId,
        UserId: req.params.userId
    }

    ///// Validation for Create /////

    const validationSchema = {
        title: {type: "string", optional: false, max: "100"},
        content: {type: "string", optional: false, max: "500"},
        imageUrl : {type: "string", optional: true},
        GameId: {type: "number", optional: false}
    }

    const validatorInstance = new validatorClass();
    const validationResponse = validatorInstance.validate(post, validationSchema);

    if(validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed, please enter all the required fields",
            errors: validationResponse
        });
    }

   // models.Game.findByPk(req.body.game_id).then(result => {
     //   if(result) {

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
        //} else {
         //   res.status(400).json({
         //       message: "Select a valid game to make a post"
         //   });
      //  }
   // });
}

/////// READ ///////

function readPost(req, res){

    const Id = req.params.id;

    models.Post.findByPk(Id).then(result => {
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

function readAllMyPosts(req, res){

    const UserId = req.userData.userId;

    models.Post.findAll({where: {userId: UserId}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function readAllPostsByGameId(req, res){

    const GameId = req.params.gameId;

    models.Post.findAll({where: {gameId: GameId}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

/////// UPDATE ///////

function updatePost(req, res){

    const Id = req.params.id;
    const updatedPost = {
        id: req.body.id,
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        UserId: req.userData.userId
    }
    ///// Validation for Update /////

    const validationSchema = {
        title: {type: "string", optional: true, max: "100"},
        content: {type: "string", optional: true, max: "500"},
        imageUrl : {type: "string", optional: true},
        GameId: {type: "number", optional: true}
    }

    const validatorInstance = new validatorClass();
    const validationResponse = validatorInstance.validate(updatedPost, validationSchema);

    if(validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    console.log(Id);
    console.log(updatedPost.UserId);

    models.Post.findAll({where: {id: Id, userId: updatedPost.UserId}})
    .then((resp)=>{
        if(resp.length == 0){
            res.status(404).json({
                message: "Error! This squad post cannot be updated"
            });
        }
    })

    models.Post.update(updatedPost, {where: 
        {id: Id, userId: updatedPost.UserId}
    }).then(result => {
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

    const Id = req.params.id;
    const UserId = req.userData.userId;

    models.Post.destroy({where: {id: Id, userId: UserId}}).then(result => {   
        if(result != 0){
            res.status(200).json({
                message: "Squad Post successfully deleted",
                success: result 
            });
        } else {
            res.status(401).json({
                message: "Unauthorized",
                success: result 
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

////////RANDOM//////////

function randomNumber(length) {
    let randomNumber = Math.floor(Math.random() * length);
    return randomNumber;
  }

function findRandom(req, res) {
    models.Post.findAll().then(result => {
        res.status(200).json(result[randomNumber(result.length)]);
  })
}

/////// EXPORTS ///////

module.exports = {
    createPost : createPost,
    readPost : readPost,
    readAllPosts : readAllPosts,
    readAllMyPosts : readAllMyPosts,
    readAllPostsByGameId : readAllPostsByGameId,
    updatePost : updatePost,
    deletePost : deletePost,
    findRandom : findRandom
}