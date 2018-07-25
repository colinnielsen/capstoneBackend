const database = require("./connection.js");

module.exports = {
    list() {
        return database("models").select();
    },
    read(id) {
        return database("models")
            .select()
            .where("id", id)
            .first();
    },
    create(models) {
        return database("models")
            .insert(models)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, models) {
        return database("models")
            .where("id", id)
            .update(models, "*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("models").where("id", id).del()
    }
};