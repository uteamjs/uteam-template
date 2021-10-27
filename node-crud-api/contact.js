const ut = require('@uteamjs/node')

exports.load = ut.sqlseries((db, data) => [
    db.query('select * from contact', rows => {
        ut.c(rows)
        rows.forEach(t => t.gender = ut.capitalize(t.gender))
        data.rows = rows
    })
])

exports.add = ut.sqlseries((db, payload) => [
    db.updateInsert(null, payload.id, 'contact', payload)
])

exports.delete = ut.sqlseries((db, payload) => [
    db.query(`delete from contact where id in (${payload.toString()})`)
])