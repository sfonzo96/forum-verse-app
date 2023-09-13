/* 
comment = _id + post_Id + user_id + comment_body + created_at
*/

import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
    {
        commentBody: {
            type: String,
            required: true,
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required: true,
        },
        creatorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        hasReplies: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Comment', CommentSchema);
