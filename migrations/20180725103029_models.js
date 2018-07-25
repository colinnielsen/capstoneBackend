exports.up = function (knex, Promise) {
    return knex.schema.createTable("models", table => {
        table.increments('id')
        table.text('modelLink')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('models')
};