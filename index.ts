import express from 'express';
import user_router from './Routes/user';
const app = express()

const port = process.env.PORT || 3000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use('/user', user_router)

app.listen(port, () => {

    console.log("I am Listening")
})