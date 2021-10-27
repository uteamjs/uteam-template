const ut = require('@uteamjs/node')
const { v4: uuid } = require('uuid')

const app = ut.server.start()

// Handles any requests that don't match the ones above
//app.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname, 'dist/index.html'));
//});

const add = (name, email, gender) =>
    `insert into contact values ('${uuid()}', '${name}', '${email}', '${gender}')`

// Initialize data for CRUD examples base on sqlite3
// https://github.com/mapbox/node-sqlite3/wiki/API
//
// ut.sql is the memory db connect upon server start

setTimeout(() => ut.sql.serialize(() => {
    ut.sql.run(`CREATE TABLE contact (
        id char(36),
        name text,
        email text,
        gender char(6)
    )`)

    ut.sql.run(add('Peter', 'peter@gamil.com', 'male'))
    ut.sql.run(add('Kate', 'kate@gamil.com', 'female'))

    ut.sql.all('select * from contact', (err, rows) => {
        ut.info(`The follow records are created in table 'contact'`)
        ut.c(rows)
    })
}), 100)

