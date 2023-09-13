/* 
post = _id + user_Id + post_body + post_title + created_at + tags + likes + subforum_id
tags =  0 {tag} n
*/

import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
        postTitle: {
            type: String,
            required: true,
        },
        postBody: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
            required: false,
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        subforumId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subforum',
            required: true,
        },
        creatorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        hasComments: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Post', PostSchema);
