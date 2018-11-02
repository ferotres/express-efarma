import express from 'express'

const router = express.Router()

router.get('/', (request, response) => {
    response.json({message: "hello World!"})
})

export default router