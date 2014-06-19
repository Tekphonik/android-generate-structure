var fs = require('fs-extra')
var ejs = require('ejs')
var v = require('./lib/var.js')
var error = require('./lib/error.js')

// args[0] check generation type => 'activity', 'object'
// args[1] generation name
// args[2] options => activty -> '-l'

if(v.args.length < 2){
	error.length();
	process.exit(1);
}

var generator;

if(v.type == 'activity'){
	generator = require('./lib/activity.js')
	
}
else if(v.type == 'gameobject'){
	generator = require('./lib/gameObject.js')
}
else {
	error.type(v.type);
	process.exit(1);
}

if(v.projPath){
	generator.generate(v.options);
}
else{
	error.path();
	process.exit(1);
}
