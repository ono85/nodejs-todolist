import http from "http"
import {TodolistService} from "./todolist-service.mjs"

const port = 3000
const host = "localhost"

const service = new TodolistService()
const server = http.createServer( (request, response)=> {
    if( request.method === "GET"){
		service.getTodoList(request, response)
	}
})

server.listen(port, host, ()=> {
	console.log(`Server is running on http://${host}:${port}`)
})