const Boom = require('@hapi/boom')

module.exports = {
  async createUser(request) {
    const { title, name } = request.payload
  },
}
