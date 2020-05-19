const Thingamabobs = require('../controllers/thingamabobs')

module.exports = function(app){

    app.get('/', (req,res) => {
        //SERVERS ANGULAR PAGE
        //DO NOT RES.anything
    })

    app.get('/delayed', (req,res)=>{
        setTimeout((function() {res.json('From Delay')}), 2000)
        
    })

    app.get('/api/thingamabobs', (req,res) => {
        Thingamabobs.all(req,res)
    })

    app.post('/api/thingamabobs', (req,res) => {
        Thingamabobs.create(req,res)
    })
}