// A generic repository for CRUD operations (DAO)
export default class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async getAll() {
        return this.model.find().lean();
    }

    async getById(id) {
        return this.model.findById(id).lean();
    }

    async create(data) {
        return this.model.create(data).lean();
    }

    async update(
        filter,
        update,
        arrayFilters = {
            new: true,
        }
    ) {
        return await this.model
            .findOneAndUpdate(filter, update, arrayFilters)
            .lean();
    }

    async deleteById(id) {
        return this.model.findByIdAndDelete(id).lean();
    }
}
