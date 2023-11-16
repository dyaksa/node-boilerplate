const sequelize = require('../infrastructure/orm/sequelize/sequelize')
const Book = require('./book')
const BookDataStore = require('../infrastructure/datastore/book.datastore')

module.exports = class extends BookDataStore {
  constructor() {
    super()
    this.db = sequelize
    this.model = this.db.models('book')
  }

  async persist(bookEntity) {
    const { name, title } = bookEntity
    const seqBook = await this.model.create({ name, title })
    await seqBook.save()
    return new Book(seqBook.id, seqBook.name, seqBook.title)
  }

  async merge(bookEntity) {
    const seqBook = await this.model.findByPk(bookEntity.id)

    if (!seqBook) return false

    const { name, title } = bookEntity
    await seqBook.update({ name, title })

    return new Book(seqBook.id, seqBook.name, seqBook.title)
  }

  async remove(bookId) {
    const seqBook = await this.model.findByPk(bookId)
    if (seqBook) {
      return seqBook.destroy()
    }
    return false
  }

  async get(bookId) {
    const seqBook = await this.model.findByPk(bookId)
    if (!seqBook) return false
    return new Book(seqBook.id, seqBook.name, seqBook.title)
  }

  async find() {
    const seqBooks = await this.model.findAll()
    return seqBooks.map((seqBook) => {
      return new Book(seqBook.id, seqBook.name, seqBook.title)
    })
  }
}
