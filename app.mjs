import http from "http"
import {TodolistService} from "./todolist-service.mjs"

const port = 3000
const host = "localhost"

const service = new TodolistService()
const server = http.createServer( (request, response)=> {
	response.setHeader("content-Type", "application/json")

    if( request.method === "GET"){
		service.getTodoList(request, response)
	}

	if( request.method === "POST"){
		service.createTodo(request, response)
	}

	if( request.method === "PUT"){
		service.updateTodo(request, response)
	}

	if( request.method === "DELETE"){
		service.deleteTodo(request, response)
	}
})

server.listen(port, host, ()=> {
	console.log(`Server is running on http://${host}:${port}`)
})