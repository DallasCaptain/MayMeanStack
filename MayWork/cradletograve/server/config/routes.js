module.exports = function(app){

    app.get('/', (req,res) => {
        //SERVERS ANGULAR PAGE
        //DO NOT RES.anything
    })

    app.get('/delayed', (req,res)=>{
        setTimeout((function() {res.json('From Delay')}), 2000)
        
    })

}