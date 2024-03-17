const { getApiCacheKey } = require('../utils/cache.utils');
const { getConnection } = require('../redis/connection');
const { DEFAULT_API_CACHE_TTL } = require('../constants/contants');

/**
 * 
 * @param {number} ttl - in seconds.
 * @returns {Function}
 */
function cacheMiddleware(ttl = DEFAULT_API_CACHE_TTL) {
  return async function(req, res, next) {
    const key = getApiCacheKey(req);
    const redis = getConnection();

    const cacheData = await redis.get(key).catch(error => {
      console.log("error while fetching from cache: ", error.toString());
    });

    if (cacheData) {
      return res.status(200).send(cacheData);
    }

    const resJson = res.json;
    res.json = async function(data) {
      if (res.statusCode === 200) {
        await redis.set(key, JSON.stringify(data), 'EX', ttl).catch(error => {
          console.log("error while setting cache: ", error.toString());
        });
      }
      resJson.call(this, data);
    };

    next();
  }
}

module.exports = {
  cacheMiddleware,
};