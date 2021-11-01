const { sqlseries } = require('@uteamjs/node')

exports.load = sqlseries((db, payload) => [
    db.queryParam('select * from contact where id= ?', [payload.id], rows => {
        payload.data = rows[0]
        payload.data.gender = payload.data.gender.toLowerCase()
    })
])