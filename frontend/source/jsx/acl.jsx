module.exports = function (ctx, next) {
  // TODO: check access
  if (typeof next === 'function') next();
};
