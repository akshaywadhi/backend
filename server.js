import express from 'express'
import cors from 'cors'
import router from './router/userRouter.js'
import dotenv from "dotenv";

dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)



app.listen(5000, () => {
  console.log('Server Is Running On Port 5000')
})