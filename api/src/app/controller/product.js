
import express from 'express'
import Product from './../model/product/product'
import {check, validationResult} from 'express-validator/check'

const router = express.Router()


/**
 *  GET /product
 */
router.get('/', (request, response) => {

    Product
        .find({})
        .exec()
        .then(collection => {
            response.json(collection)
        })
        .catch(reason => {
            return response
                .status(500)
                .json({error: reason})
        })

})


/**
 *  GET /product/:idProduct
 *  @param mongoId idProduct
 */
router.get('/:idProduct',

    check('idProduct').isMongoId(),

    (request, response) => {

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response
                .status(422)
                .json({errors: errors.array()});
        }

        Product
            .findOne({_id: request.params.idProduct})
            .exec()
            .then(product => {
                response.json(product)
            })
            .catch(reason => {
                return response
                    .status(500)
                    .json({error: reason})
            })

})


/**
 *  PATCH /product/:idProduct
 *  @param mongoId idProduct
 */
router.patch('/:idProduct',

    check('idProduct').isMongoId(),
    check('laboratory').isString().escape(),
    check('price').isFloat().escape(),

    (request, response) => {

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response
                .status(422)
                .json({errors: errors.array()});
        }

        response.json({message: "Product updated"})
})


/**
 *  POST /product
 */
router.post('/',

    check('ean').isAlphanumeric().escape(),
    check('comercialName').isString().escape(),
    check('principeActive').isString().escape(),
    check('laboratory').isString().escape(),
    check('price').isFloat().escape(),

    (request, response) => {

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response
                .status(422)
                .json({errors: errors.array()});
        }

        let product = new Product({
            ean: request.body.ean,
            comercialName: request.body.comercialName,
            principeActive: request.body.principeActive,
            laboratory: request.body.laboratory,
            price: request.body.price
        })

        product.save()

        return response.json({message: "Product Created", product: product})
})

export default router