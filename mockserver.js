/** Framework Resposável pelo backend */
let express = require('express')

/** Instância da aplicação BACKEND */
let app = express()
let port = 9000
let homeAPI = '/api/v1/'

/** Servidor HTTP do Node */
let server = require('http').createServer(app)

/** Traduzir as requisições para JSON */
app.use(require('body-parser').json())

app.get('',function(req, res){
	mensagem = "The API is located in /api/v1/"
	res.send(mensagem)
})

/** Rota de apresentação da API - GET */
app.get(homeAPI, function(req, res){
	mensagem = "Using a mock server to handle requests"
	res.send(mensagem)
})

/** Rota de autenticação */
// app.post('/api/v1/auth',(req,res) => {
// 	msg = req.body
// 	res.send( msg )
// })

app.post(homeAPI+'post/', (req, res) => {
	console.log( JSON.stringify(req.body) )
	res.send('OK')
})

/** Subir o servidor na porta setada */
server.listen(port, function(){
	console.log('This server is running on port ' + port)
	console.log('Every request will show up in this console')
})