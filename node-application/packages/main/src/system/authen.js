const ut = require('@uteamjs/node')
const localStrategy = require('passport-local').Strategy

ut.passport.use(new localStrategy({
        passReqToCallback: true
    },    
    (req, uid, pwd, done) => 
        ut.sql.query(`select id from user where alias='${uid}' and password='${pwd}'`, 
            (err, doc) => {
                if(err || doc.length === 0)
                    return done(null, false, {message: 'Login failed'})

                const usr = doc[0].id

                ut.info("'%s' signed in as [%s]", usr, uid)

                done(null, usr)
            })
))

