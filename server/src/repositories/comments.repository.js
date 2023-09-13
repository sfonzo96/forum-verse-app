import BaseRepository from './base.repository.js';

export default class CommentRepository extends BaseRepository {
    constructor({ Comment }) {
        super(Comment);
    }
}
