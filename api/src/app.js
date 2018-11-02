import express from 'express'


const app = express()


app.get('/', (request, response) => {
    response.send("hello world!")
})


app.listen(9000, () => {
    console.log("Servidor Arrancado en el puerto 9000")
})