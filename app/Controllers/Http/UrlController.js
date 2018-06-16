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

    async redirect({request, response, params}) {
        var {code} = params
        var url = await UrlService.getUrlByCode(code)
        return response.redirect(url)
    }

}

module.exports = UrlController
