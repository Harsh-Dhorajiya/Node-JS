const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();
const mongoose = require('mongoose');
const Promotions = require('../models/Promotions');
var authenticate = require('../authenticate');

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.get((req,res,next) => {
    Promotions.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next) => {
    Promotions.create(req.body)
    .then((resp) => {
        console.log("Promotions Is Created",resp);
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next) => {
    res.statusCode = 403;
    res.end("This method is not supported on promotions");
})
.delete(authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next) => {
    Promotions.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

promoRouter.route('/:promoID')
.get((req,res,next) => {
    Promotions.findById(req.params.promoID)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next) => {
    res.statusCode = 403;
    res.end("This method is not supported on /dishes");
})
.put(authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next) => {
    Promotions.findByIdAndUpdate(req.params.promoID, {
        $set : req.body
    },{new : true})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

.delete(authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next) => {
    Promotions.findByIdAndRemove(req.params.promoID)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = promoRouter;