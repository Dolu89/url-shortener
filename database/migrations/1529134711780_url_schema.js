'use strict'

const Schema = use('Schema')

class UrlSchema extends Schema {
  up () {
    this.create('urls', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('code', 10).notNullable().unique()
      table.string('url', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('urls')
  }
}

module.exports = UrlSchema
