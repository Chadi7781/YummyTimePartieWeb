// const PrivelegeModel = require('../models/PrivelegeModel')
//
// const express = require('express');
//
// const router=express.Router()
//
//
// // Add a path to allow easy login to any role
// router.get('/auth/:role', function (req, res,) {
//   req.session.login(req.params.role, function () {
//     res.redirect('/');
//   });
// });
// router.get('/logout', function (req, res, next) {
//   req.session.logout(function () {
//     res.redirect('/');
//   });
// });
//
// router.get('/', function (req, res, next){
//   res.send('Current role is ' + req.session.getRole());
// });
//
