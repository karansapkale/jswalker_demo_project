
var JSWALKER=require("jswalker/system/js_walker.js");


JSWALKER.load({	

	// heroku:{flag:false},

	ssl:{flag:false,port:443,socket_server_bind_port:8082,certificate:"",key:""},
	
	ssl_socket:{flag:false},

	memory_trace:{flag:false},

	base:{
		app_path:process.cwd(),
		port:process.env.PORT || 80,
		js:"/script",
		css:"/style",
		image:"/images"
	},

	cluster:{flag:true},

	redis:{flag:false,port:6379},

	socket:{flag:true,port:8081},

	template:{
		cache:true
	},

	console_trace:{flag:true},
	
	default_routing:{
		call_index_when_no_method_found:false,
		user_friendly_error:false,
		redirect:{flag:true,from:"/",to:"/demo"},		
	},

	authentication:{
		flag:true,
		controller:"authentication",
	},

	/*Database */
	database:{
		mongo:{
		  flag:false,name:"test",port:27017
		},
		mysql_pool:[
			{name:"jswalker_test",host:"127.0.0.1",user:"root",password:"",mysql_path:false}
		],
	},

},function(op){
});
