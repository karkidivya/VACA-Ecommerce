/**
 * 
 * all the routes 
 * directed from here
 * 
 */

import express from 'express'
import productRouter from './product/index.js'
import userRouter from './user/index.js'

import reviewController from '../controller/review/reviewController.js'

//
// admin routes
//
// import adminRoutes from './admin/index.js'


const router = express.Router()


//product routers
router.use('/', productRouter );

//user router
router.use('/', userRouter );

//reveiw routers

/**
 * 
    To add review the format of the review should be: 
    const review = {
        productId: { type: Mongoose.Schema.Types.ObjectId },
        userId: { type; Mongoose.Schema.Types.ObjectId },
        review: { type: String },
        rating: { type: Number } //  between 1 - 5 ( integer )
    }

*/    
router.post( '/addReview', reviewController.addReview )
// router.get( '/getReview/:id', reviewController.getReview)


// routere.post('/')
// router.use('/', adminRoutes )
export default router 