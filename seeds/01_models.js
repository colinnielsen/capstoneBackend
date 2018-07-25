
exports.seed = function (knex, Promise) {
  return knex.raw('DELETE FROM "models"; ALTER SEQUENCE models_id_seq RESTART WITH 4;')
    .then(function () {
      return knex('models').insert([
        { id: 1, modelLink: 'https://s3.us-east-2.amazonaws.com/capstoneportfolio/model0.json' },
        { id: 2, modelLink: 'https://s3.us-east-2.amazonaws.com/capstoneportfolio/model1.json' },
        { id: 3, modelLink: 'https://s3.us-east-2.amazonaws.com/capstoneportfolio/model2.json' }
      ]);
    });
};

