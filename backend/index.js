import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import userRoute from './routes/userRoutes.js'


const app = express()
app.use(cors())
app.use(express.json())
app.use(userRoute)

app.listen(2008, () => {
  console.log('Backend Run on Port : 5000')
})