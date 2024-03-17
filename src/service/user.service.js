const axios = require('axios');

/**
 * 
 * @param {string} id 
 * @param {string} userId 
 * @returns {object}
 */
const getUser = async (id, userId) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  
  const result = response.data.filter(item => {
    if (id && userId) {
      return item.id == id && item.userId == userId;
    }
    if (id) {
      return item.id == id;
    }
    if (userId) {
      return item.userId == userId;
    }

    return false;
  });

  return result;
};

module.exports = {
  getUser,
};