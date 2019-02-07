var express = require('express');
var router = express.Router();

var Task = require('../models/task');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Testing' });
});

/*GET Login poge*/
router.get('/login', function(req,res,next) {
  res.render('login', {Title: 'Conéctate'});
});

/* GET dashboard page*/
router.get('/dashboard', function(req,res,next) {
  res.render('dashboard', {title:'Dashboard'});
});

/* GET task page*/
router.get('/task', async function(req,res,next) {
	var tasks = await Task.find();
	console.log(tasks);
	res.render('task', {title:'task', tasks: tasks});
});

router.post('/add', async function(req,res,next){
	var task = new Task(req.body);
	await task.save();
	res.redirect('/task');
});


module.exports = router;
