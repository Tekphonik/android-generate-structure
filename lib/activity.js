var data = {
	activity: function(){
		return ejs.render(fs.readFileSync(__dirname + '/templates/activity.ejs', 'utf-8'), {name: args[0], path: projPath})
	},

	view: function(){
		return ejs.render(fs.readFileSync(__dirname + '/templates/view.ejs', 'utf-8'), {name: args[0], path: projPath})
	},

	touchListener: function(){
		return ejs.render(fs.readFileSync(__dirname + '/templates/touchListener.ejs', 'utf-8'), {name: args[0], path: projPath})
	},

	manifest: function(){
		var manifest = fs.readFileSync(manifestPath, 'utf-8');

		var partOne = manifest.match(/[\s\S]+<\/application>/).toString().replace("</application>", "");
		var partTwo = manifest.match(/<\/application>[\s\S]+/).toString();

		var newManifest = partOne + ejs.render(fs.readFileSync(__dirname + '/templates/manifest.ejs', 'utf-8'), {name: args[0]}) + partTwo;

		return newManifest;
	}
}

var activity = {
	generate: function(){

		if (!fs.existsSync(dir+'/'+args[0])) {
		    fs.mkdirSync(dir+'/'+args[0]);
		}

		fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'Activity.java', data.activity(), callbacks.activity());
		fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'View.java', data.view(), callbacks.view());
		fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'TouchListener.java', data.touchListener(), callbacks.touchListener());
		fs.writeFile(manifestPath, data.manifest(), callbacks.manifest());
	}
}

module.exports = activity