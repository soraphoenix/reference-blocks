'use strict'

class PageController {
    async home({view, request, response}){
        console.log(request.post())
        // response.send()

        let data = {
            "name" : "tracy",
            "age" : 33
        }

        // response.redirect('https://google.com')
        return view.render('pages/welcome')
    }

    async contact({view}){
        return view.render('pages/contact')
    }

    async admin({view}){
        return view.render('pages/account')
    }

    async edge({view}){
        let users = [
            {
                name: 'Tracy S. Marshall',
                age: 33,
                location: 'Oakland, CA',
                loggedIn: true
            },
            {
                name: 'Peter Smith',
                age: 24,
                location: 'Watertown, CT',
                loggedIn: true
            },
            {
                name: 'Billy Johnson',
                age: 21,
                location: 'Phoenix, AZ',
                loggedIn: true
            },
            {
                name: 'Pitbull',
                age: 36,
                location: 'Miami, Fl',
                loggedIn: true
            }
        ]
        return view.render('pages/learning', {users})
    }

    async saveUser({request}){
        return request.post()
    }
}



module.exports = PageController
