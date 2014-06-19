var v = require('./var.js')
var fs = require('fs-extra')
var ejs = require('ejs')
var path = require('path')
var _ = require('lodash')

function render(fileName, locals){
	return ejs.render(fs.readFileSync(path.resolve(__dirname + '/../templates/'+fileName+'.ejs'), 'utf-8'), locals)
}

var data = {
	object: render('gameObject', {path: v.projPath}),
	extension: render('extends_gameObject', {name: v.name, path: v.projPath})
}

var gameObject = {
	generate: function(options){
		console.log(data.object);

		// fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'Activity.java', data.activity(), callbacks.activity());
		// fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'View.java', data.view(), callbacks.view());
		// fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'TouchListener.java', data.touchListener(), callbacks.touchListener());
		// fs.writeFile(manifestPath, data.manifest(), callbacks.manifest());
	}
}

module.exports = gameObject