const { Thingamabob } = require('../models/thingamabobs')


module.exports = {
    all: ((req,res) => {
        Thingamabob.find({})
            .then(thingys => {

                //test some latency
                //setTimeout((function() {res.json(thingys)}), 2000)
                res.json(thingys)
            })
            .catch(err => res.json(err))
    }),

    create: ((req,res) => {
        //console.log(req.body)
        thingy = new Thingamabob()
        thingy.name = req.body.name
        thingy.color = req.body.color
        thingy.material = req.body.material
        thingy.save()
            .then(newThingy => {
                res.json(newThingy)
            })
            .catch(err => res.json(err))
    })

}