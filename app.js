const servidor = require('./config/sevidor')
var app = servidor.app
var porta = servidor.porta

app.get('/', (req, res)=>{
    res.render('Servidor rodando em http://localhost:' + porta)
})

app.listen(porta, ()=>{
    console.log('http://localhost:' + porta)
})