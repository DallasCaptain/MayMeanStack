const users = require('../controllers/users')
const apiv1 = require('../controllers/apiv1')


module.exports = function(app){

    app.get('/', (req,res) => {
        users.index(req,res)
    })

    app.get('/login', (req,res)=>{
        users.login(req,res)
    })
    
    app.post('/sessions', (req,res)=>{
        users.processLogin(req,res)
    })

    app.get('/home', (req,res) => {
        users.new(req,res)
    })
    
    app.get('/users/:id', (req,res) =>{
        users.show(req,res)
    })
    
    app.get('/users/:id/edit', (req,res) =>{
        users.edit(req,res)
    })
    
    app.post('/users/:id',(req,res) =>{
        users.update(req,res)
    })
    app.post('/users', (req,res) =>{
        users.create(req,res)
    })
    
    app.get('/users/:id/destroy', (req,res)=>{
        users.destroy(req,res)
    })
    
    app.get('/foreach',(req,res)=>{
        users.index2(req,res)
    })
    
    app.get('/api/v1/users',(req,res)=>{
        apiv1.apiindex(req,res)
    })

    app.post('/api/v1/users', (req,res)=>{
        apiv1.apicreate(req,res)
    })

}