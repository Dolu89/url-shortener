'use strict'

const User = use('App/Models/User')

class UserController {
    async login ({ request, response, auth }) {
        const { email, password } = request.all()
        await auth.attempt(email, password)
        return response.redirect('/');
    }

    async store({ request, response, auth }) {
        const user = await User.create(request.only(['username', 'email', 'password']));
    
        await auth.login(user);
    
        return response.redirect('/');
    }
}

module.exports = UserController
