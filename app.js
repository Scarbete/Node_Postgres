const express = require('express')
const userRouter = require('./routes/user.routes.js')
const postRouter = require('./routes/post.routes.js')

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.get('/', (request, response) => {
    response.send('Hello PostgreSQL!')
})

app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`)
})
