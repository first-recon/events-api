const Database = require('../db');

function Service () {
    this.db = new Database();
}

Service.prototype.getAll = function () {
    return this.db.getAll();
};

Service.prototype.getById = function (id) {
    return this.db.get({ id }, true);
}

module.exports = Service;