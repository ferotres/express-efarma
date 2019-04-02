
import Product from './product'


class ProductRepository {

    /**
     *
     * @return {Promise<any>}
     */
    async  getAllProducts() {

        console.log('1');
        let products = await Product.find({}).exec()
            .then(collection => {
                console.log('2');
                return collection
            })
            .catch(reason => {
                return reason
            })

        console.log('3');
        return products
    }

}


export default ProductRepository