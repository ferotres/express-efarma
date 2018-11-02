import express from 'express'
import config  from './config'
import router  from './router'

const app = express()

config(app)
router(app)

app.get('/', (request, response) => {
    response.send("hello world!")
})

app.listen(app.get('settings').PORT, () => {
    console.log(`Server listen in port: ${app.get('settings').PORT}`)
})