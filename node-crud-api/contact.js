const { sqlseries, capitalize } = require('@uteamjs/node')

exports.load = sqlseries((db, data) => [
    db.query('select * from contact', rows => {
        rows.forEach(t => t.gender = capitalize(t.gender))
        data.rows = rows
    })
])

exports.add = sqlseries((db, payload) => [
    db.updateInsert(null, payload.id, 'contact', payload)
])

exports.delete = sqlseries((db, payload) => [
    db.query('delete from contact where id in (?)', [payload.toString])
])