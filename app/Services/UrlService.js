'use strict'

const Url = use('App/Models/Url')

class UrlService {

    async generateUniqueShortUrl() {
        var code = ""
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        while(await this.isCodeUrlAlreadyExists(code)){
            for (var i = 0; i < 5; i++)
                code += possible.charAt(Math.floor(Math.random() * possible.length))
        }

        return code
    }

    async isCodeUrlAlreadyExists(code) {
        if(code === "") return true
        return await Url.findBy('code', code) === null ? false : true
    }

}

module.exports = new UrlService()
