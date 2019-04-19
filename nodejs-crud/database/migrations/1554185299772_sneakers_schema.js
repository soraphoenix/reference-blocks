'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SneakersSchema extends Schema {
  up () {
    this.create('sneakers', (table) => {
      table.string('title', 100).notNullable().unique()
      table.text('description', 'longtext').notNullable()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('sneakers')
  }
}

module.exports = SneakersSchema
