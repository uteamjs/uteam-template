const ut = require('@uteamjs/node')

const _next = (req, res, next) => next()

exports.preProcess = _next
exports.postLogin = _next
exports.postLogout = _next

exports.postApi = ut.sqlseries((o, p, req) => [
    cb => {
      //_.c('API acl checking again')  
      cb()
    }
])

