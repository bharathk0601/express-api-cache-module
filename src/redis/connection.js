const Redis = require('ioredis');

let connection = new Redis();

const getConnection = () => {
 return connection || (connection = new Redis());
};

module.exports = {
  getConnection,
};

