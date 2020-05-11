const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('You will get your promotions !!!');
})
.post((req,res,next) => {
    res.end('Will add the promotions: ' + req.body.name + 'with details' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end("This method is not supported on promotions");
})
.delete((req,res,next) => {
    res.end("Deleting all the promotionn!!!");
});

promoRouter.route('/:promoID')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('You will get' + req.params.promoID + 'to you !!');
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end("This method is not supported on /dishes");
})
.put((req,res,next) => {
    res.write("Updating the promo:" +req.params.promoID + "\n");
    res.end('We Will add the promo: ' + req.body.name + 'with details' + req.body.description);
})

.delete((req,res,next) => {
    res.end("Deleting promotions for "+req.params.promoID);
});

module.exports = promoRouter;