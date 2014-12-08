var Storage = require('storage');

module.exports = function (ctx, next) {
    Storage.getGameConfig(next);
};
