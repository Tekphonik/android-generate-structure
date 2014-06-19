var v = require('./var.js')
var fs = require('fs-extra')
var ejs = require('ejs')
var path = require('path')
var _ = require('lodash')

function render(fileName, locals){
	return ejs.render(fs.readFileSync(path.resolve(__dirname + '/../templates/'+fileName+'.ejs'), 'utf-8'), locals)
}

var data = {
	activity: render('activity', {name: v.name, path: v.projPath}),
	view: render('view', {name: v.name, path: v.projPath}),
	touchListener: render('touchListener', {name: v.name, path: v.projPath}),
	manifest: function(){
		var manifest = fs.readFileSync(v.manifestPath, 'utf-8');

		var partOne = manifest.match(/[\s\S]+<\/application>/).toString().replace("</application>", "");
		var partTwo = manifest.match(/<\/application>[\s\S]+/).toString();

		var newManifest = partOne + render('manifest', {name: v.name}) + partTwo;

		return newManifest;
	}
}

var activity = {
	generate: function(options){
		fs.ensureDirSync(v.dir+'/'+v.name)

		// fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'Activity.java', data.activity(), callbacks.activity());
		// fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'View.java', data.view(), callbacks.view());
		// fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'TouchListener.java', data.touchListener(), callbacks.touchListener());
		// fs.writeFile(manifestPath, data.manifest(), callbacks.manifest());

module.exports = activity