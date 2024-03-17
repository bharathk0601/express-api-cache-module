const { sortObj } = require("./shared.utils");

/**
 * 
 * @param {object} req 
 * @returns {string}
 */
const getApiCacheKey = (req) => {
  let key = req.path;
  key += '|query:' + JSON.stringify(sortObj(req.query));
  key += '|params:' + JSON.stringify(sortObj(req.params));

  return key;
};

module.exports = {
  getApiCacheKey,
};