var fs = require('fs')
var ejs = require('ejs')

var dir = process.cwd();
var args = process.argv.slice(2);

var projPath = dir.match(/com\/[a-zA-Z0-9\/]+/).toString();
projPath = projPath.replace(/\//g, ".");
projPath += "."+args[0];

var callbacks = {
	activity: function(err){
		if (err) throw err;
		console.log("wrote activity");
	},

	view: function(err){
		if (err) throw err;
		console.log("wrote view");
	},

	touchListener: function(err){
		if (err) throw err;
		console.log("wrote touch listener");
	}
}

var data = {
	activity: function(){
		return ejs.render(fs.readFileSync(__dirname + '/templates/activity.ejs', 'utf-8'), {name: args[0], path: projPath})
	},

	view: function(){
		return ejs.render(fs.readFileSync(__dirname + '/templates/view.ejs', 'utf-8'), {name: args[0], path: projPath})
	},

	touchListener: function(){
		return ejs.render(fs.readFileSync(__dirname + '/templates/touchListener.ejs', 'utf-8'), {name: args[0], path: projPath})
	}
}

if (!fs.existsSync(dir+'/'+args[0])) {
    fs.mkdirSync(dir+'/'+args[0]);
}

fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'Activity.java', data.activity(), callbacks.activity());
fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'View.java', data.view(), callbacks.view());
fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'TouchListener.java', data.touchListener(), callbacks.touchListener());