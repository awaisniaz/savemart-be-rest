import express from 'express'
import { usercontroller } from '../Controller/user'
const user_router = express.Router()

user_router.post('/login', usercontroller?.login)
user_router.post('/register', usercontroller?.register)

export default user_router