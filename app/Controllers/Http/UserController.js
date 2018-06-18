'use strict'

const User = use('App/Models/User')
const ValidatorService = use('App/Services/ValidatorService')

class UserController {
    async login ({ request, response, auth, session }) {
        const { email, password } = request.all()

        const rules = {
            email: 'required|email',
            password: 'required'
        }
        var isValidate = await ValidatorService.validate(request, session, rules)
        if(!isValidate)
            return response.redirect('back')

        await auth.attempt(email, password)
        return response.redirect('/');
    }

    async store({ request, response, auth, session }) {

        const rules = {
            username: 'required',
            email: 'required|email|unique:users,email',
            password: 'required'
        }
        var isValidate = await ValidatorService.validate(request, session, rules)
        if(!isValidate)
            return response.redirect('back')

        const user = await User.create(request.only(['username', 'email', 'password']));
    
        await auth.login(user);
    
        return response.redirect('/');
    }
}

module.exports = UserController
