export default class CommentController {
    constructor({ CommentsService }) {
        this.commentService = CommentsService;
    }
    createComment = async (req, res, next) => {};
    editComment = async (req, res, next) => {};
    deleteComment = async (req, res, next) => {};
}
