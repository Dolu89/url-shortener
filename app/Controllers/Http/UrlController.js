'use strict'

const Url = use('App/Models/Url')
const UrlService = use('App/Services/UrlService')

class UrlController {

    async create({request, response, auth}){
        var {url} = request.all()
        
        var code = await UrlService.generateUniqueShortUrl()
        var user_id = auth.user ? auth.user.id : null
        
        var url = await Url.create({
            url,
            code,
            user_id
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
