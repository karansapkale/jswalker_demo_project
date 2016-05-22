
var JSWALKER=require("jswalker_system/system/js_walker.js");

JSWALKER.load({	

	heroku:{flag:false},

	/*flag:true ===> Put Certificate into ssl_certificate folder*/ 
	ssl:{flag:false,port:443,socket_server_bind_port:8082,certificate:"ubot24.com",key:"ubot24.com"},

	memory_trace:{flag:true},

	/*Node js server it self*/
	base:{
		app_path:process.cwd(),
		port:80,
		js:"/script",
		css:"/style",
		image:"/images"
	},
	/*Node js server it self*/

	cluster:{flag:true},

	redis:{flag:true,port:6379},

	socket:{flag:true,port:8081}, //flavour:single-core-socket-io,multi-core-single-socket-io,multi-core-with-socket-cluster

	/*doT.js template engine*/
	template:{
		cache:false
	},

	/*If any syntax error in controller or model automatically send error and line number in interrupt callback*/
	console_trace:{flag:true},
	
	//some routing handling functionality
	default_routing:{
		call_index_when_no_method_found:false, //when your controller does not contain method the default index method called if flag is set to true 
		user_friendly_error:false,
		redirect:{flag:true,from:"/",to:"/demo"},		
	},

	authentication:{
		flag:true,
		controller:"authentication",
		prevent_url:["/login","/signup"]
	},

	/*Database */
	database:{
		mongo:{
		  flag:false,name:"test",port:27017
		},
		mysql:{
			name:"jswalker_test",host:"127.0.0.1",user:"root",password:"",mysql_path:false
		} 
	},

	/*Pass object that used in long time.*/	
},function(op){
	//var memory__=process.memoryUsage();       
		//console.log(memory__);
});

/********************CONFIGURE-YOUR-APP********************/
