var data = {

	object: function(){
		return 
	}

	extension: function(){

	}

}

var gameObject = {
	generate: function(options){
		

		if (!fs.existsSync(dir+'/'+'') {
		    fs.mkdirSync(dir+'/'+'');
		}

		fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'Activity.java', data.activity(), callbacks.activity());
		fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'View.java', data.view(), callbacks.view());
		fs.writeFile(dir+'/'+args[0]+'/'+args[0]+'TouchListener.java', data.touchListener(), callbacks.touchListener());
		fs.writeFile(manifestPath, data.manifest(), callbacks.manifest());
	}
}

module.exports = gameObject