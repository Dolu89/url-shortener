'use strict'

const { validate } = use('Validator')

class ValidatorService {

    async validate(request, session, rules) {
        const validation = await validate(request.all(), rules)

        if (validation.fails()) {
            session.withErrors(validation.messages()).flashExcept(['password'])
            return false
        }
        return true
    }

}

module.exports = new ValidatorService()
