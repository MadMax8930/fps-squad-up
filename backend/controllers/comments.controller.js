const models = require('../models')
const validatorClass = require('fastest-validator');

/////// CREATE///////

function createComment(req, res) {
    console.log("create comment")

    const comment = {
        content: req.body.content,
        PostId: +req.params.postId,
        UserId: +req.userData.userId
    }

    console.log(comment)

    ///// Validation for Create /////

    const validationSchema = {
        content: {type: "string", optional: false, max: "500"}
    }

    const validatorInstance = new validatorClass();
    const validationResponse = validatorInstance.validate(comment, validationSchema);

    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Comment.create(comment).then(result => {
        res.status(201).json({
            message: "Comment successfully created",
            comment: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

/////// READ ///////

function showComment(req, res){

    const Id = req.params.id;

    models.Comment.findByPk(Id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Comment not found"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}


function showAllComments(req, res){

    const UserId = req.userData.userId;
    const PostId = req.params.postId;

    models.Comment.findAll({where: {postId: PostId}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

/////// UPDATE ///////

function updateComment(req, res){

    const Id = req.params.id;
    const updatedComment = {
        content: req.body.content,
        UserId: req.userData.userId
    }

    ///// Validation for Update /////

    const validationSchema = {
        content: {type: "string", optional: false, max: "500"},
    }

    const validatorInstance = new validatorClass();
    const validationResponse = validatorInstance.validate(updatedComment, validationSchema);

    if(validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Comment.findAll({where: {id: Id, userId: updatedComment.UserId}})
    .then((resp)=>{
        if(resp.length == 0){
            res.status(404).json({
                message: "Error! This comment cannot be updated"
            });
        }
    })

    models.Comment.update(updatedComment, {where: {id: Id, userId: updatedComment.UserId}}).then(result => {
        if (result) {
            res.status(200).json({
                message: "Your comment was successfully updated",
                post: updatedComment
            });
        } else {
            res.status(404).json({
                message: "Comment not found"
            });
        }
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    });
}

/////// DELETE ///////

function deleteComment(req, res) {

    const Id = req.params.id;
    const UserId = req.userData.userId;

    models.Comment.destroy({where:{id: Id, userId: UserId}}).then(result => {
        if(result != 0){
            res.status(200).json({
                message: "You have successfully deleted your comment",
                success: result 
            });
        } else {
            res.status(401).json({
                message: "You cannot delete this comment, it's not yours",
                success: result 
            });
        }
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

module.exports = {
    createComment: createComment,
    showComment: showComment,
    showAllComments: showAllComments,
    updateComment: updateComment,
    deleteComment: deleteComment
}