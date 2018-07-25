const express = require('express');
const router = express.Router();

const queries = require('./queries');

router.get("/", (request, response, next) => {
    queries.list().then(model => {
        response.json({
            model
        });
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(model => {
        response.status(201).json({
            model: model
        });
    }).catch(next);
});


module.exports = router;