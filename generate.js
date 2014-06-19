var fs = require('fs')
var ejs = require('ejs')

var dir = process.cwd();
var args = process.argv.slice(2);

var projPath = dir.match(/com\/[a-zA-Z0-9\/]+/).toString();
projPath = projPath.replace(/\//g, ".");
projPath += "."+args[0];

var manifestPath = dir.match(/[a-zA-Z0-9\/]+main/)
manifestPath += "/AndroidManifest.xml"

// args[0] check generation type => 'activity', 'object'
// args[1] generation name
// args[2] options => activty -> '-l'

if(args.length < 2){
	console.log("Needs at least 2 arguments.");
	console.log("Usage:");
	console.log("ags TYPE NAME [OPTIONS]");
	console.log("e.g. ags activity Main");
}

var type = args[0].toLowerCase();
var name = args[1].charAt(0).toUpperCase() + args[1].slice(1);
var options = args.slice(2);

if(type == 'activity'){
	var activity = require(__dirname + '/lib/activity.js')
	activity.generate(options);
}
else if(type == 'gameobject'){
	var gameObject = require(__dirname + '/lib/gameObject.js')
	gameObject.generate(options, path)
}