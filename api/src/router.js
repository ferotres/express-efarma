import home from './app/controller/home'


const router = app => {

    app.use('/', home)

}

export default router