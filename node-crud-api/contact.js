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
    callback => eachSeries(payload, (item, cb) =>
        db.queryParam('delete from contact where id = ?', item)(cb)
    , callback)
 ])