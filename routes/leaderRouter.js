const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('You will get your leaders !!!');
})
.post((req,res,next) => {
    res.end('Will add the leaders: ' + req.body.name + 'with details' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end("This method is not supported on leaders");
})
.delete((req,res,next) => {
    res.end("Deleting all the leaders!!!");
});

leaderRouter.route('/:leaderID')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('You will get ' + req.params.leaderID + ' to you !!');
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end("This method is not supported on leaders");
})
.put((req,res,next) => {
    res.write("Updating the leaders:" +req.params.leaderID + "\n");
    res.end('We Will add the leaders: ' + req.body.name + ' with details' + req.body.description);
})

.delete((req,res,next) => {
    res.end("Deleting leaders for "+req.params.leaderID);
});

module.exports = leaderRouter;