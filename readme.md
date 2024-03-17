* An Express middleware used to cache API responses for a specified duration (default 1 day) using Redis. This is suitable when the response data doesn't change frequently.
* Cache's the API response for the specified duration (default 1 day | 60 * 60 * 24).
* Here Redis is used for cacheing.
* For the current request parameter's if the value is present in redis cache then it will sent in the response.
* Else if value is not present in cache, then it will go to the actual business logic and if the API is returning success response (i.e status 200) then 
response data will be cached for the specifed duartion.
* subsequent request will read the data from cache.
* Cache key:
    * Cache key in constructed based on request parameter's as shown in (src/utils/cache.utils.js)
    * Here order of parameter's doesn't matter because query & path parms's key is sorted before contructing cache key.
    * Example request
        * Path defined in Express router: "/user/:id"
        * Client request url parameters "/user/3?userId=1"
        * Redis cache key: "/user/3|query:{\"userId\":\"1\"}|params:{\"id\":\"3\"}"
* Usage of the middleware is shown in the (src/controllers/user.controller.js).
* As shown in the example While applying the middleware you can override the default cache duration.
        