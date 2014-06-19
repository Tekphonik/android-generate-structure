

var error = {
	length: function(){
		console.log("Needs at least 2 arguments.");
		console.log("Usage:");
		console.log("	ags TYPE NAME [OPTIONS]");
		console.log("	e.g. ags activity Main");
	},

	type: function(type){
		console.log(type+" Type does not exist.");
		console.log("Type List:");
		console.log("	activity");
		console.log("	gameobject");
	},

	path: function(){
		console.log("Project Path cannot be found. Exiting Script.");
		console.log("Make sure you are in an Android Project Folder.");
	}
}

module.exports = error