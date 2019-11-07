const db = require('../data/db-config');

const find = () => {
    return db('schemes');
}

const findById = (id) => {
    return db('schemes').where({ id });
}

const findSteps = (id) => {
    return db('steps').where({ scheme_id: id });
}