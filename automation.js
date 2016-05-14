function automation(){
}var automation_obj = new automation();


automation.prototype.grunt=function(){

  
/*Grunt task */
		console.log('Grunting...');
		var exec = require('child_process').exec;
		var child = exec('grunt');
		child.stdout.on('data', function(data) {
		    console.log(data);
		});
		child.stderr.on('data', function(data) {
		    console.log(data);
		});
		child.on('close', function(code) {
		    console.log('Grunting done.');
		});
/*Grunt task */


};


automation.prototype.reset_development=function(){

var fs=require("fs");
var path=process.cwd()+"/node_modules/jswalker_system";

	console.log('Reseting system default applying');
	fs.createReadStream(path+"/system/switch/_template/default-app.js").pipe(fs.createWriteStream(process.cwd()+"/app.js"));
	console.log('System default applied');

};





var argv_arr=process.argv;
var i=2,argv_len=argv_arr.length;

var last_command=argv_arr[2];
var argv_option=["--grunt","--production","--development","--reset"];	

// console.log(last_command);
 //console.log( last_command.indexOf("--reset") );


	if(last_command.indexOf("--grunt")>-1){

		/*Do grunting*/
		automation_obj.grunt();


	}else if(last_command.indexOf("--production")>-1){

		/* Production switch*/
		//automation_obj.production();


	}else if(last_command.indexOf("--development")>-1){

		/* Development switch*/
		//automation_obj.development();


	}else if(last_command.indexOf("--reset")>-1){

		/* initial setting */
		automation_obj.reset_development();


		

	}else{
		/*Do grunting*/		
		automation_obj.grunt();

	}

