module.exports = function(app){

    app.get('/', (req,res) => {
        console.log('new connection')
        //res.send('hello from routes')
    })

    app.get('/api/tasks', (req,res)=>{
        console.log('someone asked for tasks')
        res.json([{name:'dishes'},{name:'mop the floor'}])
    })

    app.post('/api/tasks', (req,res)=>{
        console.log('recieved new task:',req.body)
        res.json(req.body)
    })
}