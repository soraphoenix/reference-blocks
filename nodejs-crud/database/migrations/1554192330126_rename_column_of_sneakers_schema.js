'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RenameColumnOfSneakersSchema extends Schema {
  up () {
    this.table('sneakers', (table) => {
      table.renameColumn('description', 'image')
    })
  }

  down () {
    this.table('sneakers', (table) => {
      table.renameColumn('image', 'description')
    })
  }
}

module.exports = RenameColumnOfSneakersSchema
