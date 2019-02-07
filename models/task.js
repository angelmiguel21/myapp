var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
	title: String,
	description: String,
	status: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('task', TaskSchema);