/* 
subforums = _id + subforum_name + description + crated_by + created_at
*/

import mongoose from 'mongoose';

const SubforumSchema = new mongoose.Schema(
    {
        subforumName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Subforum', SubforumSchema);
