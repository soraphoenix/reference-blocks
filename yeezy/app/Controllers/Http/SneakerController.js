'use strict'

const Sneaker = use('App/Models/Sneaker')

class SneakerController {
    async index({view}){
        try {
            let allSneakers = await Sneaker.all()
            allSneakers = allSneakers.toJSON()
            let viewData = {
                allSneakers
            }
            console.log(viewData)
            return view.render('sneakers/index', viewData)
        } catch (error) {
            console.log(error)
            return 'Sorry, there was an error. Check console'
        }
    }

    async create({view}){
        try {
            return view.render('sneakers/create')
        } catch (error) {
            console.log(error)
            return 'Sorry, there was an error. Check console'
        }
    }

    async store({request, response}){
        try {
            const sneaker = new Sneaker()
            const data = request.post()

            sneaker.title = data.title
            sneaker.image = data.image
            sneaker.description = data.description

            await sneaker.save()

            return response.redirect('/')
        } catch (error) {
            console.log(error)
            return 'Sorry, there was an error. Check console'
        }
        
        
    }

    async show({request, view}){
        try {
            const sneaker = await Sneaker.find(request.params.id)
            let viewData = {
                sneaker: sneaker.toJSON()
            }
            console.log(viewData)
            return view.render('sneakers/show', viewData)
        } catch (error) {
            console.log(error)
            return 'Sorry, there was an error. Check console'
        }
    }

    async edit({view, request}){
        try{
            const sneaker = await Sneaker.find(request.params.id)
            let viewData = {
                sneaker: sneaker.toJSON()
            }
            console.log(viewData)
            return view.render('sneakers/edit', viewData)
        } catch (error) {
            console.log(error)
            return 'Sorry, there was an error. Check console'
        }
    }

    async update({request, response}){
        try {
            console.log(request.post())
            const postData = request.post()
            const sneaker = await Sneaker.find(request.params.id)

            sneaker.title = postData.title
            sneaker.image = postData.image
            sneaker.description = postData.description
            sneaker.save()
            console.log(sneaker.toJSON())
            return response.redirect('back')
        } catch (error) {
            console.log(error)
            return 'Sorry, there was an error. Check console'
        }
    }

    async destroy({request, response}){
        try {
            console.log(request.post())
            const postData = request.post()
            const sneaker = await Sneaker.find(request.params.id)

            sneaker.delete()
            console.log(sneaker.toJSON())
            return response.redirect('back')
        } catch (error) {
            console.log(error)
            return 'Sorry, there was an error. Check console'
        }
    }
}

module.exports = SneakerController
