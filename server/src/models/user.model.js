/* 
user = _id + nickname + email + password + birth_date + user_biography + user_role + liked_posts + created_at
	liked_posts = 0 {post_id} n
*/

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        nickname: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        birthDate: {
            type: Date,
            required: true,
        },
        userBiography: {
            type: String,
            required: false,
        },
        userRole: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
        likedPosts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post',
            },
        ],
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('User', UserSchema);
