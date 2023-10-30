import express from 'express'
import productController from '../../controller/product/index.js'

const productRouter = express.Router()


productRouter.get('/getProducts', productController.getProduct)
productRouter.get('/getProduct/:id', productController.getProductById )
productRouter.delete('/deleteProduct/:id',productController.deleteProductById)
productRouter.post( '/addProduct', productController.storeProduct)


export default productRouter