* An Express middleware to cache the API responses for a specified duration using Redis. This is suitable when the response doesn't change frequently.
* Midddleware: (src/middlewares/cache.middleware.js)
* Cache's the API response for the specified duration (default 1 day | 60 * 60 * 24).
* Here Redis is used for cacheing.
* For the current request parameter's if the value is present in redis cache then it will sent in the response.
* If the value is not present in cache, then it will go to the actual business logic and while returning the response if the statusCode is 200, then 
response data will be cached (by the cache middleware) for the specified duartion.
* subsequent request will read the data from cache.
* Cache key:
    * Cache key in constructed based on request parameter's as shown in (src/utils/cache.utils.js)
    * Here order of parameter's doesn't matter because query & path parms's key is sorted before contructing the cache key.
    * Example:
        * Path defined in Express router: "/user/:id"
        * Client request url parameters "/user/3?userId=1"
        * Redis cache key: "/user/3|query:{\"userId\":\"1\"}|params:{\"id\":\"3\"}"
* Usage of the middleware is shown in the (src/controllers/user.controller.js).
* As shown in the example While applying the middleware you can override the default cache duration.
        