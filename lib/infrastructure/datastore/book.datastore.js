'use strict'

module.exports = class {
  persist(bookDomain) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }

  merge(bookDomain) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }

  remove(bookId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }

  get(bookId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }

  getByTitle(bookTitle) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }

  find() {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }
}
