'use strict'

const Url = use('App/Models/Url')
const UrlService = use('App/Services/UrlService')

class UrlController {

    async create({request, response}){
        var {url} = request.all()
        
        var code = await UrlService.generateUniqueShortUrl()

        var url = await Url.create({
            url,
            code
        })

        return response.redirect('/')
    }

}

module.exports = UrlController
