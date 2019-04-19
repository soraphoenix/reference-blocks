'use strict'

class ItemController {
    index({params}){
        return `
        <h1>${ params.category }</h1>
        <h3>Items from ${ params.min } to ${ params.max }</h3>
        `
    }
}

module.exports = ItemController
