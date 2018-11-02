
import {config}    from 'dotenv'
import morgan      from 'morgan'
import compression from 'compression'
import bodyParser  from 'body-parser'
import cors        from 'cors'
import connection  from './app/infrastructure/mongoose/conection'


const settings = app => {

    const SETTINGS = config().parsed

    app.use(bodyParser.json())

    app.disable('x-powered-by')

    app.set('env', SETTINGS.ENV)

    app.use(bodyParser.urlencoded({extended: false}))

    app.use(compression())

    app.use(cors())

    if (SETTINGS.ENV === 'development') {
        app.use(morgan("combined"))
    }

    app.set('settings', SETTINGS)

    connection(SETTINGS)

}


export default settings