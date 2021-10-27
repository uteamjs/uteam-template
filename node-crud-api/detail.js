const ut = require('@uteamjs/node')

exports.load = ut.sqlseries((db, payload) => [
    db.query(`select * from contact where id='${payload.id}'`, rows => {
        payload.data = rows[0]
        payload.data.gender = payload.data.gender.toLowerCase()
    })
])