
module.exports = (app) =>{
    var conexao = require('../config/database')
    conexao()

    var mygrid = require('../models/mygrid')


    app.get('/', async(req, res)=>{
        var mygrids = await mygrid.find().sort({'_id':-1})
        console.log(mygrids)
            res.render('index.ejs', {dados:mygrids})
        
    })
}