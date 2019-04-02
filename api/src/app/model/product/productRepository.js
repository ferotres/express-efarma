
import Product from './product'


class ProductRepository {

    /**
     *
     * @return {Promise<any>}
     */
    async getAllProducts() {
        return await Product
            .find({})
            .exec()
            .then(collection => { return collection})
            .catch(reason => {return reason})
    }

}

export default ProductRepository;