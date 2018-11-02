import home    from './app/controller/home'
import product from './app/controller/product'


const router = app => {

    app.use('/', home)
    app.use('/product', product)

}

export default router