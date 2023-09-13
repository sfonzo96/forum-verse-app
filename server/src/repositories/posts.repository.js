import BaseRepository from './base.repository.js';

export default class PostRepository extends BaseRepository {
    constructor({ Post }) {
        super(Post);
    }
}
