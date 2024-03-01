
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import expressSession from 'express-session'
//import mongoStore from 'connect-mongo'
//import fileStore from 'session-file-store'
import passport from 'passport'
import localStrategy from './auth_strategies/localStrategy.js'

import personController from './controller/personController.js'

const port = 3030

const app = express()

const fileStore = (await import('session-file-store')).default(expressSession);

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(cookieParser())

app.use(
    expressSession({
        secret: "taskerSecret",
        resave:false,
        saveUninitialized:false,
        store: new fileStore({
            path:'./sessions',
            ttl:86400,
        }),
        cookie:{maxAge: 1000 * 60 * 60 * 24}
                    }))

app.use(passport.initialize())

passport.use(localStrategy)

passport.serializeUser( function (user,done) { 
                            done(null,user) })


app.get('/', (req,res) => { res.send("hello world")})

app.post('/register', passport.authenticate('local'), (req,res) => [

    res.send("successfully registered")
])

app.post('/person', personController.createPerson)


app.listen( port, () => (console.log(`server started in port ${port}`)))