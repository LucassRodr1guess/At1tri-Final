module.exports = (app) =>{
    var conexao = require('../config/database')

    var modelo = require('../models/mygrid')

    app.get('/mygrid',(req, res)=>{
        conexao()
        
        modelo.find()
        .then((modelo)=>{
            res.render('mygrid.ejs', {dados:modelo})
        })
        .catch(()=>{
            res.render('mygrid.ejs')
        })

        
    })

    app.post('/mygrid', (req, res)=>{
        conexao()

        var documento = new modelo({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save()
        .then(()=>{
            res.redirect('/mygrid')
        })
        .catch(()=>{
            res.send("Não foi possivel gravar os dados no database")
        })
    })
}