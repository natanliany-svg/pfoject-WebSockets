
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import { router } from './routs/router.js'
// import { db } from './db/db.js'



const app = express()
app.use(cors())
app.use(express.json())
app.use('',router)


const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3380",
//        methods: ["GET", "POST"]
    }
})






io.on('connection', (socket) => {
    console.log(`user connected: ${socket.id}`)

    socket.on('disconnect', () => {
    console.log(`user disconnected: ${socket.id}`)
    })
})



server.listen(3380, () => {
    console.log('Server running on port 3380');
})
