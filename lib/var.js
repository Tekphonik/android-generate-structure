var dir = process.cwd();
var args = process.argv.slice(2);

var projPath;

if(dir.match(/com\/[a-zA-Z0-9\/]+/)){
	projPath = dir.match(/com\/[a-zA-Z0-9\/]+/).toString();
	projPath = projPath.replace(/\//g, ".");
	projPath += "."+args[0];
}
else{
	projPath = null;
}

var manifestPath = dir.match(/[a-zA-Z0-9\/]+main/)
manifestPath += "/AndroidManifest.xml"

var type = args[0].toLowerCase();
var name = args[1].charAt(0).toUpperCase() + args[1].slice(1);
var options = args.slice(2);

v = {
	dir: dir,
	args: args,
	projPath: projPath,
	manifestPath: manifestPath,
	type: type,
	name: name,
	options: options
}

module.exports = v