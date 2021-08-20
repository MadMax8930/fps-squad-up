const models = require('../models')
const validatorClass = require('fastest-validator');

/////// CREATE///////

function createComment(req, res) {

    const comment = {
        content: req.body.content,
        postId: req.body.post_id,
        userId: 1
    }

    ///// Validation for Create /////

    const validationSchema = {
        content: {type: "string", optional: false, max: "500"},
        postId: {type: "number", optional: false}
    }

    const validatorInstance = new validatorClass();
    const validationResponse = validatorInstance.validate(comment, validationSchema);

    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Post.findByPk(req.body.post_id).then(post => {
        if(post === null){
            res.status(404).json({
                message: "Post not found"
            });
        }else{
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
        }}).catch(error => {
            res.status(500).json({
                message: "Something went wrong",
                error: error
            });
        });
}

/////// READ ///////

function showComment(req, res){

    const id = req.params.id;

    models.Comment.findByPk(id).then(result => {
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

    models.Comment.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

/////// UPDATE ///////

function updateComment(req, res){

    const id = req.params.id;
    const updatedComment = {
        content: req.body.content
    }

    const userId = 1;

    const validationSchema = {
        content: {type: "string", optional: false, max: "500"},
    }

    ///// Validation for Update /////

    const validatorInstance = new validatorClass();
    const validationResponse = validatorInstance.validate(updatedComment, validationSchema);

    if(validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Comment.update(updatedComment, {where: {id:id, userId:userId}}).then(result => {
        res.status(200).json({
            message: "Comment successfully updated",
            post: updatedComment
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    });
}

/////// DELETE ///////

function deleteComment(req, res) {

    const id = req.params.id;
    const userId = 1;

    models.Comment.destroy({where:{id:id, userId:userId}}).then(result => {
        res.status(200).json({
            message: "Comment successfully deleted"
        });
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